"""Place a recorded keystroke or mouse click on every scheduled event.

    python3 -I audio.py <keyboard-dir> <mouse.wav> <schedule.json> <seconds> <out.wav>
"""
import json, random, struct, sys, wave
from array import array
from pathlib import Path

keys_dir, mouse_path, sched_path, duration, out_path = (
    Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3]), float(sys.argv[4]), Path(sys.argv[5]))
sched = json.loads(sched_path.read_text())
rng = random.Random(5)
SR = 44100


def load(path):
    with wave.open(str(path), 'rb') as w:
        assert w.getsampwidth() == 2 and w.getnchannels() == 1 and w.getframerate() == SR, path
        d = array('h')
        d.frombytes(w.readframes(w.getnframes()))
    peak = max(abs(v) for v in d) or 1
    onset = next((i for i, v in enumerate(d) if abs(v) > peak * 0.04), 0)
    return [v / peak for v in d[max(0, onset - 66):]]


keys = [load(f) for f in sorted(keys_dir.glob('*.wav'))]
mouse = load(mouse_path)
if not keys:
    raise SystemExit('no keyboard samples in %s' % keys_dir)


def resample(data, rate):
    out, n = [], int(len(data) / rate)
    for i in range(n):
        x = i * rate
        j = int(x)
        if j + 1 >= len(data):
            break
        out.append(data[j] * (1 - (x - j)) + data[j + 1] * (x - j))
    return out


buf = array('d', bytes(8 * int((duration + 1) * SR)))
last = -1
for ev in sched['events']:
    if ev['kind'] == 'mouse':
        data, gain = mouse, 0.85 * rng.uniform(0.9, 1.1)
        rate = rng.uniform(0.96, 1.05)
    else:
        i = rng.randrange(len(keys))
        while i == last and len(keys) > 1:
            i = rng.randrange(len(keys))
        last = i
        data = keys[i]
        big = ev['kind'] in ('space', 'enter')
        rate = (0.88 if ev['kind'] == 'enter' else 0.90 if big else 1.0) * rng.uniform(0.955, 1.045)
        gain = (1.3 if ev['kind'] == 'enter' else 1.15 if big else 1.0) * rng.uniform(0.82, 1.18)
    data = resample(data, rate)
    start = int(ev['t'] * SR)
    for k, v in enumerate(data):
        if start + k >= len(buf):
            break
        buf[start + k] += v * gain

peak = max(abs(v) for v in buf) or 1.0
gain = 0.74 / peak
total = int(duration * SR)
with wave.open(str(out_path), 'wb') as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(struct.pack('<%dh' % total,
                              *(max(-32768, min(32767, int(v * gain * 32767))) for v in buf[:total])))
print('%d events placed, summed peak %.2f' % (len(sched['events']), peak))
