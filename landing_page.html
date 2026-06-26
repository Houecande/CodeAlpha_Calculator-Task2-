<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Calculator</title>
  <meta name="description" content="Calculatrice glassmorphism — présentation" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg-deep:     #0a0618;
      --surface:     rgba(255,255,255,.05);
      --border:      rgba(255,255,255,.10);
      --text:        #F3F1FA;
      --text-mid:    #A9A5C4;
      --text-soft:   #6E6A8E;
      --violet:      #8B7CF8;
      --violet-mid:  #C4B5FD;
      --violet-deep: #4f46e5;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-deep);
      color: var(--text);
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* ── BACKGROUND ── */
    .bg-gradient {
      position: fixed;
      inset: 0;
      background: linear-gradient(160deg, #1a0533 0%, #0d1a3a 35%, #0a2240 65%, #1a1040 100%);
      z-index: -2;
    }

    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(90px);
      pointer-events: none;
      z-index: -1;
      opacity: .55;
    }
    .orb1 { width: 480px; height: 480px; background: #8B7CF8; top: -120px; left: -120px; }
    .orb2 { width: 420px; height: 420px; background: #3B82F6; bottom: -100px; right: -100px; }
    .orb3 { width: 300px; height: 300px; background: #EC4899; top: 40%; left: 55%; opacity: .3; }

    /* ── LAYOUT ── */
    .wrap {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ── NAV ── */
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 28px 0;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
    }

    .nav-brand .dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--violet);
      box-shadow: 0 0 12px var(--violet);
    }

    /* ── HERO ── */
    .hero {
      padding: 50px 0 30px;
      text-align: center;
    }

    .eyebrow {
      font-size: 11px;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--violet-mid);
      margin-bottom: 18px;
    }

    .hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(42px, 7vw, 68px);
      line-height: 1.05;
      letter-spacing: -.01em;
      color: var(--text);
    }

    .hero h1 em {
      font-style: italic;
      background: linear-gradient(135deg, var(--violet-mid), var(--violet));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero p {
      max-width: 540px;
      margin: 24px auto 0;
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-mid);
      font-weight: 300;
    }

    /* ── DEMO STAGE ── */
    .demo-stage {
      margin: 30px auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 16px 60px;
      position: relative;
    }

    /* macOS-style window chrome wrapping the demo */
    .window-frame {
      width: 100%;
      max-width: 460px;
      background: rgba(255, 255, 255, .03);
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 30px 90px rgba(0, 0, 0, .45);
    }

    .window-titlebar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: rgba(255, 255, 255, .03);
      border-bottom: 1px solid var(--border);
    }

    .window-dot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
    }
    .window-dot.red    { background: #ff5f57; }
    .window-dot.yellow { background: #febc2e; }
    .window-dot.green  { background: #28c840; }

    .window-body {
      padding: 32px 24px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .window-back {
      align-self: flex-start;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: rgba(255, 255, 255, .5);
      text-decoration: none;
      margin-bottom: 20px;
      transition: color .2s ease;
    }
    .window-back:hover { color: rgba(255, 255, 255, .9); }

    #calc-demo {
      width: 320px;
      max-width: 100%;
      background: rgba(255, 255, 255, .06);
      backdrop-filter: blur(26px);
      -webkit-backdrop-filter: blur(26px);
      border: 1px solid rgba(255, 255, 255, .12);
      border-radius: 26px;
      padding: 26px;
      box-shadow: 0 32px 80px rgba(0, 0, 0, .5), inset 0 1px 0 rgba(255, 255, 255, .15);
      position: relative;
      z-index: 1;
      transition: box-shadow .3s ease, border-color .3s ease;
    }

    #calc-demo:hover {
      border-color: rgba(255, 255, 255, .2);
      box-shadow: 0 40px 100px rgba(0, 0, 0, .55), inset 0 1px 0 rgba(255, 255, 255, .2);
    }

    .demo-display {
      background: rgba(0, 0, 0, .25);
      border: 1px solid rgba(255, 255, 255, .08);
      border-radius: 18px;
      padding: 18px 20px 14px;
      margin-bottom: 22px;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }

    .demo-expr {
      font-size: 13px;
      color: rgba(255, 255, 255, .4);
      min-height: 17px;
      letter-spacing: .02em;
      margin-bottom: 6px;
      font-variant-numeric: tabular-nums;
    }

    .demo-main {
      font-size: 40px;
      font-weight: 300;
      color: #fff;
      letter-spacing: -.02em;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }

    .demo-btns {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 11px;
      pointer-events: none; /* purely visual — no user interaction */
    }

    .demo-btn {
      height: 60px;
      border: none;
      border-radius: 16px;
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 400;
      outline: none;
      position: relative;
      overflow: hidden;
      color: #fff;
      transition: transform .15s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .demo-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, .1);
      opacity: 0;
      transition: opacity .15s ease;
      border-radius: inherit;
    }

    .demo-btn.is-active {
      transform: scale(.93);
    }
    .demo-btn.is-active::before { opacity: 1; }

    .demo-num {
      background: rgba(255, 255, 255, .09);
      border: 1px solid rgba(255, 255, 255, .1);
    }

    .demo-op {
      background: rgba(139, 92, 246, .25);
      border: 1px solid rgba(139, 92, 246, .35);
      color: #c4b5fd;
      font-weight: 500;
    }

    .demo-fn {
      background: rgba(255, 255, 255, .06);
      border: 1px solid rgba(255, 255, 255, .08);
      color: rgba(255, 255, 255, .65);
      font-size: 15px;
    }

    .demo-eq {
      background: linear-gradient(135deg, #7c3aed, #4f46e5);
      border: 1px solid rgba(139, 92, 246, .5);
      font-weight: 600;
      font-size: 23px;
      box-shadow: 0 4px 24px rgba(124, 58, 237, .4);
    }

    .demo-zero { grid-column: span 2; }

    .demo-clear {
      background: rgba(239, 68, 68, .15);
      border: 1px solid rgba(239, 68, 68, .25);
      color: #fca5a5;
      font-size: 15px;
    }

    .demo-hint {
      text-align: center;
      margin-top: 16px;
      font-size: 11px;
      color: rgba(255, 255, 255, .22);
      letter-spacing: .05em;
    }

    /* ── CTA BUTTON ── */
    .cta-row {
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }

    .btn-open {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 28px;
      border-radius: 14px;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: #fff;
      background: linear-gradient(135deg, #7c3aed, var(--violet-deep));
      box-shadow: 0 8px 30px rgba(124, 58, 237, .35);
      transition: transform .15s ease, box-shadow .2s ease;
    }
    .btn-open:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 36px rgba(124, 58, 237, .45);
    }

    /* ── SHORTCUTS SECTION ── */
    .section {
      padding: 50px 0 20px;
      border-top: 1px solid var(--border);
      margin-top: 30px;
    }

    .section-eyebrow {
      font-size: 10px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--violet-mid);
      margin-bottom: 10px;
      text-align: center;
    }

    .section h2 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(24px, 4vw, 30px);
      letter-spacing: -.01em;
      margin-bottom: 30px;
      text-align: center;
    }

    .kbd-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      max-width: 560px;
      margin: 0 auto;
    }

    .kbd-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
    }

    .kbd-row span { font-size: 13px; color: var(--text-mid); }

    .kbd-key {
      background: rgba(0, 0, 0, .3);
      border: 1px solid rgba(255, 255, 255, .18);
      color: var(--text);
      font-size: 11px;
      padding: 4px 9px;
      border-radius: 6px;
      font-family: monospace;
    }

    footer {
      padding: 20px 0 50px;
      text-align: center;
    }

    footer p {
      font-size: 12px;
      color: var(--text-soft);
      line-height: 1.8;
    }

    @media (max-width: 380px) {
      #calc-demo { width: 100%; padding: 20px; }
      .demo-main { font-size: 34px; }
      .demo-btn { height: 54px; font-size: 16px; }
      .window-body { padding: 24px 16px 22px; }
    }

    @media (max-width: 560px) {
      .kbd-grid { grid-template-columns: 1fr; }
    }

    @media (prefers-reduced-motion: reduce) {
      .demo-btn { transition: none; }
    }
  </style>
</head>
<body>

  <div class="bg-gradient"></div>
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  <div class="orb orb3"></div>

  <div class="wrap">

    <nav>
      <div class="nav-brand"><span class="dot"></span> Calculator</div>
    </nav>

    <header class="hero">
      <p class="eyebrow">Démonstration</p>
      <h1>Calculer avec <em>élégance</em></h1>
      <p>Une calculatrice glassmorphism — verre dépoli, dégradés animés et interactions soignées, conçue en HTML, CSS et JavaScript natifs.</p>
    </header>

    <div class="demo-stage">
      <div class="window-frame">
        <div class="window-titlebar">
          <span class="window-dot red"></span>
          <span class="window-dot yellow"></span>
          <span class="window-dot green"></span>
        </div>
        <div class="window-body">
          <a class="window-back" href="index.html">&larr; Retour à la présentation</a>

          <div id="calc-demo" role="img" aria-label="Démonstration animée de la calculatrice effectuant des calculs corrects">

            <div class="demo-display">
              <div class="demo-expr" id="demo-expr"></div>
              <div class="demo-main" id="demo-disp">0</div>
            </div>

            <div class="demo-btns">
              <button class="demo-btn demo-clear" data-key="clear" tabindex="-1" aria-hidden="true">AC</button>
              <button class="demo-btn demo-fn"    data-key="sign"  tabindex="-1" aria-hidden="true">+/&minus;</button>
              <button class="demo-btn demo-fn"    data-key="pct"   tabindex="-1" aria-hidden="true">%</button>
              <button class="demo-btn demo-op"    data-key="/"     tabindex="-1" aria-hidden="true">&divide;</button>

              <button class="demo-btn demo-num" data-key="7" tabindex="-1" aria-hidden="true">7</button>
              <button class="demo-btn demo-num" data-key="8" tabindex="-1" aria-hidden="true">8</button>
              <button class="demo-btn demo-num" data-key="9" tabindex="-1" aria-hidden="true">9</button>
              <button class="demo-btn demo-op"  data-key="*" tabindex="-1" aria-hidden="true">&times;</button>

              <button class="demo-btn demo-num" data-key="4" tabindex="-1" aria-hidden="true">4</button>
              <button class="demo-btn demo-num" data-key="5" tabindex="-1" aria-hidden="true">5</button>
              <button class="demo-btn demo-num" data-key="6" tabindex="-1" aria-hidden="true">6</button>
              <button class="demo-btn demo-op"  data-key="-" tabindex="-1" aria-hidden="true">&minus;</button>

              <button class="demo-btn demo-num" data-key="1" tabindex="-1" aria-hidden="true">1</button>
              <button class="demo-btn demo-num" data-key="2" tabindex="-1" aria-hidden="true">2</button>
              <button class="demo-btn demo-num" data-key="3" tabindex="-1" aria-hidden="true">3</button>
              <button class="demo-btn demo-op"  data-key="+" tabindex="-1" aria-hidden="true">+</button>

              <button class="demo-btn demo-num demo-zero" data-key="0" tabindex="-1" aria-hidden="true">0</button>
              <button class="demo-btn demo-num" data-key="." tabindex="-1" aria-hidden="true">.</button>
              <button class="demo-btn demo-eq"  data-key="=" tabindex="-1" aria-hidden="true">=</button>
            </div>

            <p class="demo-hint">Démonstration automatique</p>
          </div>

          <div class="cta-row">
            <a class="btn-open" href="index.html">Ouvrir la calculatrice &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <p class="section-eyebrow">Raccourcis</p>
      <h2>Support clavier</h2>
      <div class="kbd-grid">
        <div class="kbd-row"><span>Chiffres</span><span class="kbd-key">0&ndash;9</span></div>
        <div class="kbd-row"><span>Opérateurs</span><span class="kbd-key">+ &minus; * /</span></div>
        <div class="kbd-row"><span>Calculer</span><span class="kbd-key">Entrée</span></div>
        <div class="kbd-row"><span>Effacer un chiffre</span><span class="kbd-key">Retour arrière</span></div>
        <div class="kbd-row"><span>Tout effacer</span><span class="kbd-key">Échap</span></div>
        <div class="kbd-row"><span>Pourcentage</span><span class="kbd-key">%</span></div>
      </div>
    </section>

    <footer>
      <p>Calculator — HTML · CSS · JavaScript, sans framework.</p>
    </footer>

  </div>

  <script>
    /* ============================================================
       Démo automatique non-interactive.
       Simule des frappes de touches pour montrer la calculatrice
       produire des résultats corrects, en boucle continue.
       .demo-btns a pointer-events:none -> aucun clic possible.
       Seul un survol visuel reste actif sur la carte (#calc-demo:hover).
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
  </script>
</body>
</html>
