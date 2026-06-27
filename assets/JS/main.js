/* ── STATE ── */
let cur = '0';
let prev = '';
let op = null;
let justEvaled = false;

/* ── ELEMENTS ── */
const dispEl = document.getElementById('disp');
const exprEl = document.getElementById('expr');

const OP_SYMBOLS = { '+': '+', '-': '\u2212', '*': '\u00d7', '/': '\u00f7' };

/* ── DISPLAY ── */
function setDisp(val) {
  const s = String(val);
  dispEl.textContent = s;
  dispEl.className = 'disp-main';
  if (s.length > 12) dispEl.classList.add('xsmall');
  else if (s.length > 8) dispEl.classList.add('small');
}

function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return 'Error';
  const rounded = parseFloat(n.toPrecision(12));
  return String(rounded);
}

/* ── INPUT HANDLERS ── */
function inputNum(d) {
  if (justEvaled) {
    cur = '0';
    justEvaled = false;
    exprEl.textContent = '';
  }
  if (cur === 'Error') cur = '0';
  if (d === '.' && cur.includes('.')) return;
  if (cur === '0' && d !== '.') cur = d;
  else cur = cur.length < 14 ? cur + d : cur;
  setDisp(cur);
}

function inputOp(o) {
  if (cur === 'Error') return;
  justEvaled = false;
  if (op && prev !== '') compute(false);
  prev = cur;
  op = o;
  cur = '0';
  exprEl.textContent = prev + ' ' + OP_SYMBOLS[o];
}

function compute(final) {
  if (!op || prev === '') return;
  const a = parseFloat(prev);
  const b = parseFloat(cur);
  let res;

  switch (op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = b === 0 ? NaN : a / b; break;
  }

  const result = fmt(res);

  if (final) {
    exprEl.textContent = prev + ' ' + OP_SYMBOLS[op] + ' ' + cur + ' =';
    op = null;
    prev = '';
    justEvaled = true;
  }

  cur = result;
  setDisp(cur);
}

function clearAll() {
  cur = '0';
  prev = '';
  op = null;
  justEvaled = false;
  setDisp('0');
  exprEl.textContent = '';
}

function backspace() {
  if (cur === 'Error' || justEvaled) { clearAll(); return; }
  cur = cur.length > 1 ? cur.slice(0, -1) : '0';
  setDisp(cur);
}

function toggleSign() {
  if (cur === '0' || cur === 'Error') return;
  cur = cur.startsWith('-') ? cur.slice(1) : '-' + cur;
  setDisp(cur);
}

function toPercent() {
  const n = parseFloat(cur);
  if (isNaN(n)) return;
  cur = fmt(n / 100);
  setDisp(cur);
}

/* ── CLICK HANDLER (event delegation) ── */
document.getElementById('calc').addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const { num, op: o, action } = btn.dataset;

  if (num !== undefined) inputNum(num);
  else if (o) inputOp(o);
  else if (action === 'eq') compute(true);
  else if (action === 'clear') clearAll();
  else if (action === 'sign') toggleSign();
  else if (action === 'pct') toPercent();
});

/* ── KEYBOARD SUPPORT ── */
const KEY_NUM_MAP = {
  '0':'0','1':'1','2':'2','3':'3','4':'4',
  '5':'5','6':'6','7':'7','8':'8','9':'9',
  '.':'.', ',':'.'
};

function flashButton(selector) {
  const btn = document.querySelector('#calc ' + selector);
  if (!btn) return;
  btn.style.transform = 'scale(.9)';
  setTimeout(() => { btn.style.transform = ''; }, 120);
}

document.addEventListener('keydown', e => {
  if (KEY_NUM_MAP[e.key] !== undefined) {
    inputNum(KEY_NUM_MAP[e.key]);
    flashButton(`[data-num="${KEY_NUM_MAP[e.key]}"]`);
    return;
  }
  switch (e.key) {
    case '+': inputOp('+'); flashButton('[data-op="+"]'); break;
    case '-': inputOp('-'); flashButton('[data-op="-"]'); break;
    case '*': inputOp('*'); flashButton('[data-op="*"]'); break;
    case '/': e.preventDefault(); inputOp('/'); flashButton('[data-op="/"]'); break;
    case 'Enter':
    case '=': compute(true); flashButton('[data-action="eq"]'); break;
    case 'Backspace': backspace(); break;
    case 'Escape': clearAll(); break;
    case '%': toPercent(); break;
  }
});
