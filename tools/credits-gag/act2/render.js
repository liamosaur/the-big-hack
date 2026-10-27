const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const FPS = 24;
const OUT = process.env.OUT || process.argv[2];
if (!OUT) { console.error('usage: OUT=<dir> node render.js'); process.exit(1); }
(async () => {
  const frames = path.join(OUT, 'frames');
  fs.rmSync(frames, { recursive: true, force: true });
  fs.mkdirSync(frames, { recursive: true });
  const sched = fs.readFileSync(path.join(OUT, 'schedule.json'), 'utf8');
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 640, height: 360 }, deviceScaleFactor: 2 });
  await pg.addInitScript(`window.S=${sched};`);
  await pg.goto('file://' + path.join(__dirname, 'act2.html'));
  const end = await pg.evaluate('END');
  const n = Math.round(end * FPS);
  for (let i = 0; i < n; i++) {
    await pg.evaluate(`render(${i / FPS})`);
    await pg.screenshot({ path: path.join(frames, `f${String(i).padStart(4, '0')}.png`) });
  }
  await b.close();
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-framerate', String(FPS), '-i', path.join(frames, 'f%04d.png'),
    '-c:v', 'libx264', '-crf', '16', '-pix_fmt', 'yuv420p', path.join(OUT, 'silent.mp4')]);
  console.log(`${n} frames, ${end}s`);
})();
