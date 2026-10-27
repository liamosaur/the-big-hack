// Timing for the act 2 mock-up. One source of truth: the page draws from these
// marks and the audio places its clicks on the same events.
const fs = require('fs'), path = require('path');
const OUT = process.env.OUT || process.argv[2];
if (!OUT) { console.error('usage: OUT=<dir> node schedule.js'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

const M = {
  mouseIn: 2.0,                      // pointer arrives over the refusal
  selStart: 3.0, selEnd: 3.8,        // drag-select the prompt
  copy1: 4.2, copy2: 4.6,            // one quick ctrl-c
  switch: 5.3,                       // different harness
  modelOpen: 6.3, modelPick: 7.3,    // choose MODEL PLACEHOLDER
  effortOpen: 8.2, effortPick: 9.2,  // set Effort to Max
  boxClick: 10.1, paste: 10.9, submit: 11.8,
  think: 11.9,
  p0: 13.9, p1: 15.9, p2: 17.9,            // a beat of thinking between each
  esc1: 16.9,                              // one esc, a second after phase 1
  escMany: [17.6, 17.78, 17.95, 18.13, 18.32],   // then a handful, fast
  stopHover: 19.6, stopClicks: [20.2, 20.6, 21.0],
  box2Click: 21.6, typeStart: 22.0, typeEnd: 23.5, enter2: 23.8,
  disrupt: 24.3, disable: 25.5,
  panicStart: 25.8, panicClicks: [26.3, 26.75, 27.2, 27.65, 28.1],
  p3: 28.5,
  flicker: 32.9, collapse: 34.1, line: 34.6, dot: 34.9, black: 35.3,
  end: 36.7,
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
const jitter = mulberry32(4242);
M.escFinal = [];
for (let i = 0, at = 29.2; i < 15; i++) {
  M.escFinal.push(+at.toFixed(3));
  at += 0.30 - i * 0.012 + (jitter() - 0.5) * 0.05;   // faster as it gets worse
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
  { t: M.copy1, kind: 'key' },                                        // ctrl-c, once
  { t: M.esc1, kind: 'esc' }, ...M.escMany.map(t => ({ t, kind: 'esc' })),
  ...M.escFinal.map(t => ({ t, kind: 'esc' })),
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
