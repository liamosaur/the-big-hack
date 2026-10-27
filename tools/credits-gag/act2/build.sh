#!/bin/sh
# Render the act 2 mock-up. Separate from the act 1 gag on purpose: nothing
# here is read by tools/credits-gag/build.sh or tools/make_credits.py, so the
# finished ending keeps building exactly as it does now.
#
#   tools/credits-gag/act2/build.sh
set -e
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../../.." && pwd)
OUT=${OUT:-$ROOT/build/credits-gag-act2}
KEYS="$OUT/samples/keyboard-soundpack-1"
MOUSE="$OUT/samples/mouse.wav"
export OUT
mkdir -p "$OUT/samples"

if [ ! -d "$KEYS/Single Keys" ]; then
  echo "Fetching the CC0 keyboard samples"
  mkdir -p "$KEYS"
  curl -fsSL -o "$OUT/samples/pack.zip" \
    https://opengameart.org/sites/default/files/unicae_games_keyboard_soundpack_1_0.zip
  unzip -oq "$OUT/samples/pack.zip" -d "$KEYS"
fi
if [ ! -f "$MOUSE" ]; then
  echo "Fetching the CC0 mouse click"
  curl -fsSL -o "$OUT/samples/mouse-src.wav" https://opengameart.org/sites/default/files/mouseclick.wav
  ffmpeg -v error -y -i "$OUT/samples/mouse-src.wav" -ac 1 -ar 44100 -sample_fmt s16 "$MOUSE"
fi

node "$HERE/schedule.js"
node "$HERE/render.js"
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/silent.mp4")
python3 -I "$HERE/audio.py" "$KEYS/Single Keys" "$MOUSE" "$OUT/schedule.json" "$D" "$OUT/clicks.wav"
ffmpeg -v error -y -i "$OUT/silent.mp4" -i "$OUT/clicks.wav" -map 0:v -map 1:a \
  -c:v copy -ac 2 -c:a aac -b:a 192k -shortest "$OUT/act2-mock.mp4"
echo "$OUT/act2-mock.mp4  ${D}s"

# If the act 1 gag has been built, join the two. Act 1 is cut before its long
# hold and its fade to black, so the cursor is still blinking when act 2 picks
# the same screen up.
ACT1=${ACT1:-$ROOT/build/credits-gag/guardrail-gag.mp4}
ACT1_CUT=${ACT1_CUT:-19.6}
if [ -f "$ACT1" ]; then
  ffmpeg -v error -y -t "$ACT1_CUT" -i "$ACT1" -i "$OUT/act2-mock.mp4" -filter_complex "\
    [0:v]fps=24,format=yuv420p,setsar=1[v0];[1:v]fps=24,format=yuv420p,setsar=1[v1];\
    [0:a]aformat=sample_rates=44100:channel_layouts=stereo[a0];\
    [1:a]aformat=sample_rates=44100:channel_layouts=stereo[a1];\
    [v0][a0][v1][a1]concat=n=2:v=1:a=1[v][a]" -map '[v]' -map '[a]' \
    -c:v libx264 -crf 16 -c:a aac -b:a 192k "$OUT/ending-full.mp4"
  echo "$OUT/ending-full.mp4  $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/ending-full.mp4")s"
else
  echo "act 1 not built, skipping the join (tools/credits-gag/build.sh)"
fi
