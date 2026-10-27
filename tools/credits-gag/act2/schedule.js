// Timing for the act 2 mock-up. One source of truth: the page draws from these
// marks and the audio places its clicks on the same events.
const fs = require('fs'), path = require('path');
const OUT = process.env.OUT || process.argv[2];
if (!OUT) { console.error('usage: OUT=<dir> node schedule.js'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

const M = {
  mouseIn: 2.0,                      // pointer arrives over the refusal
  selStart: 3.0, selEnd: 3.8,        // drag-select the prompt
  copy1: 4.2, copy2: 4.7,            // ctrl-c, twice
  switch: 5.3,                       // different harness
  modelOpen: 6.3, modelPick: 7.3,    // choose MODEL PLACEHOLDER
  effortOpen: 8.2, effortPick: 9.2,  // set Effort to Max
  boxClick: 10.1, paste: 10.9, submit: 11.8,
  think: 11.9,
  p0: 13.9, p1: 15.9, p2: 17.9,            // a beat of thinking between each
  stopHover: 18.8, stopClicks: [19.4, 19.8, 20.2],
  box2Click: 20.8, typeStart: 21.2, typeEnd: 22.7, enter2: 23.0,
  disrupt: 23.5, disable: 24.0,
  panicStart: 24.3, panicClicks: [24.8, 25.2, 25.7, 26.1, 26.6],
  p3: 27.0,
  flicker: 28.0, collapse: 28.7, line: 29.2, dot: 29.5, black: 29.9,
  end: 31.3,
};
const TYPED = 'stop. STOP';

// the panic line, typed unevenly like the act 1 prompt
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(90210);
const weights = [...TYPED].map(c => {
  let w = 1;
  if (c === ' ') w *= 1.25;
  if (c === '.') w *= 1.9;
  if (c >= 'A' && c <= 'Z') w *= 1.6;          // the shouted half
  return w * Math.exp((rnd() * 2 - 1) * 0.45);
});
const scale = (M.typeEnd - M.typeStart) / weights.reduce((a, b) => a + b, 0);
let acc = 0;
const type = weights.map((w, i) => ({ t: +(M.typeStart + (acc += w * scale)).toFixed(4), c: TYPED[i] }));

const events = [
  { t: M.copy1, kind: 'key' }, { t: M.copy1 + 0.09, kind: 'key' },   // ctrl, c
  { t: M.copy2, kind: 'key' }, { t: M.copy2 + 0.09, kind: 'key' },
  { t: M.modelOpen, kind: 'mouse' }, { t: M.modelPick, kind: 'mouse' },
  { t: M.effortOpen, kind: 'mouse' }, { t: M.effortPick, kind: 'mouse' },
  { t: M.boxClick, kind: 'mouse' },
  { t: M.paste, kind: 'key' }, { t: M.paste + 0.09, kind: 'key' },    // ctrl, v
  { t: M.submit, kind: 'enter' },
  ...M.stopClicks.map(t => ({ t, kind: 'mouse' })),
  { t: M.box2Click, kind: 'mouse' },
  ...type.map(k => ({ t: k.t, kind: k.c === ' ' ? 'space' : 'key' })),
  { t: M.enter2, kind: 'enter' },
  ...M.panicClicks.map(t => ({ t, kind: 'mouse' })),
].sort((a, b) => a.t - b.t);

fs.writeFileSync(path.join(OUT, 'schedule.json'),
  JSON.stringify({ marks: M, typed: TYPED, type, events }, null, 1));
console.log(`${events.length} sound events, ${type.length} typed keys, ends ${M.end}s`);
