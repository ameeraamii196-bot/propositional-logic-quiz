@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  --bg: #080b14;
  --panel: #101522;
  --panel-2: #151b2b;
  --line: #273047;
  --text: #f4f7ff;
  --muted: #9aa5bd;
  --accent: #7c5cff;
  --accent-2: #2ed3ff;
  --success: #32d583;
  --danger: #ff5d73;
  --warning: #ffc857;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 15%, rgba(124,92,255,.18), transparent 30%),
    radial-gradient(circle at 85% 80%, rgba(46,211,255,.12), transparent 28%),
    var(--bg);
  color: var(--text);
  font-family: Inter, sans-serif;
}

button { font: inherit; }

.app {
  width: min(1050px, 94%);
  margin: 0 auto;
  padding: 42px 0;
}

.screen { display: none; }
.screen.active { display: block; }

#start-screen, #result-screen {
  min-height: calc(100vh - 84px);
  align-content: center;
  text-align: center;
}

.brand {
  color: var(--accent-2);
  font-size: .75rem;
  font-weight: 800;
  letter-spacing: .2em;
  margin-bottom: 18px;
}

h1, h2, h3 { font-family: "Space Grotesk", sans-serif; }

h1 {
  font-size: clamp(2.6rem, 7vw, 5.4rem);
  line-height: .98;
  margin: 0 0 22px;
}

h1 span {
  color: var(--accent);
}

.intro {
  max-width: 650px;
  margin: 0 auto 34px;
  color: var(--muted);
  line-height: 1.7;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 650px;
  margin: 0 auto 28px;
  background: rgba(16,21,34,.82);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.info-grid div {
  padding: 22px 12px;
  border-right: 1px solid var(--line);
}

.info-grid div:last-child { border: 0; }
.info-grid strong { display: block; font-size: 1.5rem; }
.info-grid span { color: var(--muted); font-size: .8rem; }

.rules {
  max-width: 650px;
  margin: 0 auto 28px;
  text-align: left;
  background: rgba(16,21,34,.7);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px 26px;
}

.rules h3 { margin-top: 0; }
.rules li { color: var(--muted); margin: 10px 0; }

.primary-btn, .secondary-btn, .submit-btn, .hint-btn {
  border: 0;
  border-radius: 12px;
  padding: 13px 20px;
  cursor: pointer;
  transition: .2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), #9a72ff);
  color: white;
  font-weight: 700;
  box-shadow: 0 8px 25px rgba(124,92,255,.2);
}

.primary-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }

.secondary-btn {
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--line);
}

.secondary-btn:hover { border-color: var(--accent); }

.submit-btn {
  background: rgba(255,93,115,.12);
  color: #ff8a9b;
  border: 1px solid rgba(255,93,115,.3);
}

.submit-btn:hover { background: rgba(255,93,115,.2); }

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.quiz-header h2 { margin: 0; }

.timer {
  min-width: 90px;
  text-align: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
  font-weight: 800;
  color: var(--accent-2);
}

.timer.warning { color: var(--warning); }
.timer.danger { color: var(--danger); animation: pulse 1s infinite; }

@keyframes pulse {
  50% { opacity: .55; }
}

.progress-area { margin-bottom: 25px; }

.progress-label {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: .85rem;
  margin-bottom: 9px;
}

.progress-track {
  height: 7px;
  background: #1b2233;
  border-radius: 99px;
  overflow: hidden;
}

#progress-bar {
  height: 100%;
  width: 2%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: inherit;
  transition: width .25s;
}

.question-card {
  background: rgba(16,21,34,.92);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: clamp(22px, 4vw, 38px);
  min-height: 390px;
}

.question-tag {
  color: var(--accent-2);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .15em;
  margin-bottom: 18px;
}

#question-text {
  font-size: clamp(1.25rem, 2.6vw, 1.75rem);
  line-height: 1.45;
  margin: 0 0 28px;
}

.options {
  display: grid;
  gap: 13px;
}

.option {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 16px;
  text-align: left;
  background: #121827;
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 13px;
  cursor: pointer;
  transition: .18s ease;
}

.option:hover {
  border-color: var(--accent);
  background: #171d2f;
}

.option.selected {
  border-color: var(--accent);
  background: rgba(124,92,255,.13);
}

.option-letter {
  display: grid;
  place-items: center;
  min-width: 34px;
  height: 34px;
  border-radius: 9px;
  background: #20283a;
  color: #c5ccdc;
  font-weight: 800;
}

.option.selected .option-letter {
  background: var(--accent);
  color: white;
}

.hint-btn {
  margin-top: 20px;
  background: transparent;
  color: var(--warning);
  border: 1px solid rgba(255,200,87,.25);
  font-size: .85rem;
}

.hint {
  color: #d6dbea;
  background: rgba(255,200,87,.07);
  border-left: 3px solid var(--warning);
  padding: 12px 14px;
  border-radius: 6px;
  line-height: 1.5;
}

.hidden { display: none !important; }

.navigation {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
}

.navigation .submit-btn { margin-left: auto; }

.question-map {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 15px;
  background: rgba(16,21,34,.65);
  border: 1px solid var(--line);
  border-radius: 15px;
}

.map-btn {
  width: 31px;
  height: 31px;
  border: 1px solid var(--line);
  background: #121827;
  color: var(--muted);
  border-radius: 7px;
  cursor: pointer;
  font-size: .72rem;
}

.map-btn.current { border-color: var(--accent); color: white; }
.map-btn.answered { background: rgba(50,213,131,.13); color: var(--success); }

.result-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(50,213,131,.12);
  border: 1px solid rgba(50,213,131,.35);
  color: var(--success);
  font-size: 2rem;
}

#result-message {
  color: var(--muted);
  margin-bottom: 25px;
}

.score-ring {
  width: 180px;
  height: 180px;
  margin: 0 auto 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(var(--accent) 0deg, var(--accent-2) 0deg, #1b2233 0deg);
  position: relative;
}

.score-ring::after {
  content: "";
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  background: var(--bg);
}

.score-ring div {
  position: relative;
  z-index: 1;
}

.score-ring strong { font-size: 3rem; display: block; }
.score-ring span { color: var(--muted); }

.result-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 550px;
  margin: 0 auto 25px;
  gap: 10px;
}

.result-stats div {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 15px;
}

.result-stats strong { display: block; font-size: 1.4rem; }
.result-stats span { color: var(--muted); font-size: .78rem; }

.result-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.review {
  max-width: 800px;
  margin: 30px auto 0;
  text-align: left;
}

.review-item {
  padding: 18px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel);
}

.review-item.correct { border-left: 4px solid var(--success); }
.review-item.wrong { border-left: 4px solid var(--danger); }
.review-item strong { display: block; margin-bottom: 8px; }
.review-answer { color: var(--muted); font-size: .9rem; }

@media (max-width: 650px) {
  .app { padding: 25px 0; }
  .info-grid, .result-stats { grid-template-columns: 1fr; }
  .info-grid div { border-right: 0; border-bottom: 1px solid var(--line); }
  .quiz-header { align-items: flex-start; gap: 15px; }
  .navigation { flex-wrap: wrap; }
  .navigation .submit-btn { margin-left: 0; }
  .question-card { min-height: 0; }
}
