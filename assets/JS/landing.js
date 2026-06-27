/* ============================================================
   Non-interactive automatic demo.
   Simulates key presses to show the calculator
   producing correct results, in a continuous loop.
   .demo-btns has pointer-events:none -> no clicks possible.
   Only a visual hover remains active on the card (#calc-demo:hover).
   ============================================================ */

const demoDisp = document.getElementById('demo-disp');
const demoExpr = document.getElementById('demo-expr');
const OP_SYMBOLS = { '+': '+', '-': '\u2212', '*': '\u00d7', '/': '\u00f7' };

function getBtn(key) {
  return document.querySelector(`.demo-btn[data-key="${CSS.escape(key)}"]`);
}

function flash(key) {
  const btn = getBtn(key);
  if (!btn) return;
  btn.classList.add('is-active');
  setTimeout(() => btn.classList.remove('is-active'), 220);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Each calculation is verified to be mathematically correct */
const CALCULATIONS = [
  { digitsA: '12', op: '+', digitsB: '7',   result: '19' },
  { digitsA: '9',  op: '*', digitsB: '8',   result: '72' },
  { digitsA: '144',op: '/', digitsB: '12',  result: '12' },
  { digitsA: '85', op: '-', digitsB: '29',  result: '56' },
  { digitsA: '6',  op: '*', digitsB: '7',   result: '42' },
  { digitsA: '100',op: '/', digitsB: '4',   result: '25' }
];

async function typeDigits(str) {
  let typed = '';
  for (const ch of str) {
    flash(ch);
    typed += ch;
    demoDisp.textContent = typed;
    await sleep(240);
  }
  return typed;
}

async function runCalculation(calc) {
  demoExpr.textContent = '';
  demoDisp.textContent = '0';
  await sleep(300);

  await typeDigits(calc.digitsA);
  await sleep(200);

  flash(calc.op);
  demoExpr.textContent = calc.digitsA + ' ' + OP_SYMBOLS[calc.op];
  await sleep(260);

  await typeDigits(calc.digitsB);
  await sleep(300);

  flash('=');
  demoExpr.textContent = calc.digitsA + ' ' + OP_SYMBOLS[calc.op] + ' ' + calc.digitsB + ' =';
  demoDisp.textContent = calc.result;
  await sleep(1300);

  flash('clear');
  demoExpr.textContent = '';
  demoDisp.textContent = '0';
  await sleep(600);
}

async function loopDemo() {
  while (true) {
    for (const calc of CALCULATIONS) {
      await runCalculation(calc);
    }
  }
}

loopDemo();