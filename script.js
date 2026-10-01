const questions = [
  {id:1, q:"Which two types of logic are identified under logical representation in the notes?", options:["Propositional logic and predicate logic", "Boolean logic and numerical logic", "Atomic logic and compound logic", "Truth logic and relation logic"], answer:0, hint:"Focus on the definition or rule being tested."},
  {id:2, q:"What is the defining characteristic of a proposition?", options:["A question with an answer", "A declarative statement that is either true or false", "A statement that must always be true", "An opinion or command"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:3, q:"Which statement is an example of a false proposition?", options:["The Sun rises from the West.", "Where is Rohini?", "What is your name?", "Please close the door."], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:4, q:"Propositional logic is also known by which name because it works with two truth values?", options:["Boolean logic", "Predicate calculus", "Numerical calculus", "Relational logic"], answer:0, hint:"Recall the distinction between the related concepts."},
  {id:5, q:"Which is an atomic proposition?", options:["It is raining and the street is wet.", "Ankit is a doctor and the clinic is in Mumbai.", "2 + 2 = 4", "It is raining or the street is wet."], answer:2, hint:"Focus on the definition or rule being tested."},
  {id:6, q:"How is a compound proposition formed?", options:["By removing its truth value", "By combining simpler propositions using logical connectives", "By converting a proposition into a question", "By making every proposition true"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:7, q:"Which set contains three main logical connectives?", options:["Negation, conjunction, disjunction", "Conjunction, classification, disjunction", "Implication, classification, identity", "Identity, associativity, randomization"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:8, q:"Which connective represents NOT?", options:["Conjunction", "Disjunction", "Negation", "Biconditional"], answer:2, hint:"Recall the distinction between the related concepts."},
  {id:9, q:"Which symbol represents conjunction?", options:["∨", "∧", "→", "↔"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:10, q:"What does disjunction represent?", options:["NOT", "AND", "OR", "IF AND ONLY IF"], answer:2, hint:"Compare the wording of each option with the concept from the notes."},
  {id:11, q:"Which connective represents P implies Q?", options:["Negation", "Conjunction", "Implication", "Biconditional"], answer:2, hint:"Use the logical connective or truth value carefully."},
  {id:12, q:"Which connective represents “if and only if”?", options:["Disjunction", "Implication", "Biconditional", "Negation"], answer:2, hint:"Recall the distinction between the related concepts."},
  {id:13, q:"What is the purpose of a truth table?", options:["To list possible truth values and evaluate logical expressions", "To convert a proposition into a question", "To make every compound proposition true", "To remove all connectives"], answer:0, hint:"Focus on the definition or rule being tested."},
  {id:14, q:"How many truth-value combinations are possible for P, Q, and R?", options:["3", "6", "8", "9"], answer:2, hint:"Compare the wording of each option with the concept from the notes."},
  {id:15, q:"Which operation has higher precedence than conjunction, disjunction, implication, and biconditional?", options:["Negation", "Biconditional", "Implication", "Disjunction"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:16, q:"Which connective is evaluated last among these choices?", options:["Negation", "Conjunction", "Implication", "Biconditional"], answer:3, hint:"Recall the distinction between the related concepts."},
  {id:17, q:"When are two propositions logically equivalent?", options:["When they use the same symbols", "When their truth-table columns are identical", "When both are always true", "When both contain negation"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:18, q:"A proposition can be both true and false at the same time.", options:["True", "False"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:19, q:"A formula that is always true is called a tautology.", options:["True", "False"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:20, q:"Which demonstrates a limitation of basic propositional logic because it involves a quantity or relationship such as “some”?", options:["2 + 2 = 4", "The Sun is cold.", "Some apples are sweet.", "It is Sunday."], answer:2, hint:"Recall the distinction between the related concepts."},
  {id:21, q:"Which expression represents the negation of P?", options:["P ∧ Q", "¬P", "P ∨ Q", "P → Q"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:22, q:"If P is true, what is the truth value of ¬P?", options:["True", "False", "Both", "Undefined"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:23, q:"For P ∧ Q to be true, what must be the case?", options:["Only P is true", "Only Q is true", "Both P and Q are true", "At least one is true"], answer:2, hint:"Use the logical connective or truth value carefully."},
  {id:24, q:"For P ∨ Q to be true, which condition is sufficient?", options:["At least one is true", "Both are false", "Both are true", "P is false and Q is false"], answer:0, hint:"Recall the distinction between the related concepts."},
  {id:25, q:"Which is logically equivalent to P → Q?", options:["¬P ∨ Q", "P ∧ Q", "P ∨ Q", "¬P ∧ Q"], answer:0, hint:"Focus on the definition or rule being tested."},
  {id:26, q:"Two propositions are equivalent when their corresponding truth-table columns are identical for every possible case.", options:["True", "False"], answer:0, hint:"Compare the wording of each option with the concept from the notes."},
  {id:27, q:"What is a contradiction?", options:["A formula that is always true", "A formula that is always false", "A formula with no operators", "A formula that is sometimes true"], answer:1, hint:"Use the logical connective or truth value carefully."},
  {id:28, q:"Which correctly distinguishes tautology and contradiction?", options:["Tautology always false; contradiction always true", "Both are always true", "Tautology always true; contradiction always false", "Both are sometimes true and sometimes false"], answer:2, hint:"Recall the distinction between the related concepts."},
  {id:29, q:"Which set contains properties or laws mentioned in the notes?", options:["Commutativity, associativity, distributivity", "Commutativity, classification, randomization", "Associativity, implication, classification", "Identity, randomization, relation"], answer:0, hint:"Focus on the definition or rule being tested."},
  {id:30, q:"Which property allows the order of propositions to be changed for suitable operators?", options:["Associativity", "Commutativity", "Identity", "Double negation"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:31, q:"Which property concerns changing the grouping of propositions?", options:["Associativity", "Commutativity", "Identity", "Negation"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:32, q:"Which laws explain how negation interacts with AND and OR?", options:["Identity laws", "De Morgan’s laws", "Commutative laws", "Implication laws"], answer:1, hint:"Recall the distinction between the related concepts."},
  {id:33, q:"What happens when a proposition is negated twice?", options:["It becomes permanently false", "It becomes the original proposition", "It becomes permanently true", "It becomes undefined"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:34, q:"The identity property is one of the properties mentioned in the notes.", options:["True", "False"], answer:0, hint:"Compare the wording of each option with the concept from the notes."},
  {id:35, q:"Why is precedence important in a logical expression?", options:["It determines the order of evaluation", "It changes every false value to true", "It removes all parentheses", "It converts compound propositions into questions"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:36, q:"What is the correct precedence sequence from higher to lower?", options:["Negation, conjunction, disjunction, implication, biconditional", "Biconditional, implication, disjunction, conjunction, negation", "Conjunction, negation, implication, biconditional, disjunction", "Implication, conjunction, negation, disjunction, biconditional"], answer:0, hint:"Recall the distinction between the related concepts."},
  {id:37, q:"What is a major limitation of basic propositional logic?", options:["It cannot represent true or false statements", "It has limited ability to represent quantities, properties, and relationships", "It cannot use logical connectives", "It cannot use symbols such as P and Q"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:38, q:"Which statement demonstrates a limitation that motivates predicate logic?", options:["It is raining.", "2 + 2 = 4.", "All students in the class passed.", "The laboratory is open."], answer:2, hint:"Compare the wording of each option with the concept from the notes."},
  {id:39, q:"Which correctly describes propositional logic?", options:["It is used for knowledge representation in AI.", "It uses true/false propositions.", "It supports reasoning with logical connectives.", "It can fully represent every relationship between objects."], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:40, q:"Which concept describes a formula that is true for every possible combination?", options:["Tautology", "Contradiction", "Atomic proposition", "Compound proposition"], answer:0, hint:"Recall the distinction between the related concepts."},
  {id:41, q:"Which concept describes a formula that is false for every possible combination?", options:["Tautology", "Contradiction", "Equivalence", "Conjunction"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:42, q:"If P is false and Q is true, what is P ∧ Q?", options:["True", "False", "Both", "Undefined"], answer:1, hint:"Compare the wording of each option with the concept from the notes."},
  {id:43, q:"If P is false and Q is true, what is P ∨ Q?", options:["True", "False", "Undefined", "Both"], answer:0, hint:"Use the logical connective or truth value carefully."},
  {id:44, q:"Which is a compound proposition?", options:["5 > 2", "The computer is on and the network is connected.", "10 is even.", "The laboratory is open."], answer:1, hint:"Recall the distinction between the related concepts."},
  {id:45, q:"Which set contains limitations of propositional logic?", options:["Limited ability to represent quantities such as all/some; limited properties and relationships; limited expressive power", "Inability to use true/false values; inability to use symbols", "Only inability to create truth tables", "Only inability to use logical connectives"], answer:0, hint:"Focus on the definition or rule being tested."},
  {id:46, q:"Which connective has the symbol ↔?", options:["Negation", "Conjunction", "Implication", "Biconditional"], answer:3, hint:"Compare the wording of each option with the concept from the notes."},
  {id:47, q:"“Where are you going?” is a proposition because it can be answered with true or false.", options:["True", "False"], answer:1, hint:"Use the logical connective or truth value carefully."},
  {id:48, q:"What best describes the role of propositional logic in AI?", options:["A way to represent knowledge and perform logical reasoning", "A replacement for all areas of AI", "A system used only to store numerical data", "A method used only for drawing truth tables"], answer:0, hint:"Recall the distinction between the related concepts."},
  {id:49, q:"Which correctly compares atomic and compound propositions?", options:["Atomic propositions use multiple connectives; compound propositions use none", "Atomic propositions are simple; compound propositions combine simpler propositions", "Both are always true", "Atomic propositions are questions; compound propositions are commands"], answer:1, hint:"Focus on the definition or rule being tested."},
  {id:50, q:"Why is predicate logic needed when propositional logic has limited expressive power?", options:["To represent more complex properties and relationships", "To eliminate logical reasoning", "To prevent the use of variables", "To ensure every proposition is true"], answer:0, hint:"Compare the wording of each option with the concept from the notes."}
];

let current = 0;
let answers = Array(questions.length).fill(null);
let timeLeft = 15 * 60;
let timerInterval;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const answeredCount = document.getElementById("answered-count");
const progressBar = document.getElementById("progress-bar");
const timer = document.getElementById("timer");
const hint = document.getElementById("hint");
const questionTag = document.getElementById("question-tag");
const questionMap = document.getElementById("question-map");

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("prev-btn").addEventListener("click", () => changeQuestion(-1));
document.getElementById("next-btn").addEventListener("click", () => changeQuestion(1));
document.getElementById("submit-btn").addEventListener("click", submitQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);
document.getElementById("review-btn").addEventListener("click", toggleReview);
document.getElementById("hint-btn").addEventListener("click", () => hint.classList.toggle("hidden"));

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  renderQuestion();
  renderMap();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
  timer.classList.toggle("warning", timeLeft <= 300 && timeLeft > 60);
  timer.classList.toggle("danger", timeLeft <= 60);
}

function renderQuestion() {
  const item = questions[current];
  questionNumber.textContent = `Question ${current + 1} of ${questions.length}`;
  questionTag.textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  questionText.textContent = item.q;
  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;
  hint.textContent = item.hint;
  hint.classList.add("hidden");

  optionsBox.innerHTML = "";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    if (answers[current] === index) button.classList.add("selected");
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span>`;
    button.addEventListener("click", () => selectAnswer(index));
    optionsBox.appendChild(button);
  });

  document.getElementById("prev-btn").disabled = current === 0;
  document.getElementById("next-btn").textContent =
    current === questions.length - 1 ? "Review →" : "Next →";

  updateAnsweredCount();
  updateMap();
}

function selectAnswer(index) {
  answers[current] = index;
  renderQuestion();
}

function changeQuestion(direction) {
  const next = current + direction;
  if (next >= 0 && next < questions.length) {
    current = next;
    renderQuestion();
    window.scrollTo({top: 0, behavior: "smooth"});
  }
}

function renderMap() {
  questionMap.innerHTML = "";
  questions.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.className = "map-btn";
    btn.textContent = index + 1;
    btn.addEventListener("click", () => {
      current = index;
      renderQuestion();
    });
    questionMap.appendChild(btn);
  });
  updateMap();
}

function updateMap() {
  [...questionMap.children].forEach((btn, index) => {
    btn.classList.toggle("current", index === current);
    btn.classList.toggle("answered", answers[index] !== null);
  });
}

function updateAnsweredCount() {
  const count = answers.filter(a => a !== null).length;
  answeredCount.textContent = `${count} answered`;
}

function submitQuiz(timeUp = false) {
  if (!timeUp) {
    const unanswered = answers.filter(a => a === null).length;
    const ok = unanswered === 0 ||
      confirm(`You still have ${unanswered} unanswered question(s). Submit anyway?`);
    if (!ok) return;
  }

  clearInterval(timerInterval);

  let correct = 0;
  questions.forEach((item, i) => {
    if (answers[i] === item.answer) correct++;
  });

  const wrong = answers.filter((a, i) => a !== null && a !== questions[i].answer).length;
  const unanswered = answers.filter(a => a === null).length;
  const score = correct * 2;
  const percentage = score;

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  document.getElementById("score").textContent = score;
  document.getElementById("correct").textContent = correct;
  document.getElementById("wrong").textContent = wrong;
  document.getElementById("unanswered").textContent = unanswered;

  let title = "Keep Practising";
  if (percentage >= 90) title = "Logic Master";
  else if (percentage >= 75) title = "Great Work";
  else if (percentage >= 60) title = "Good Progress";
  else if (percentage >= 40) title = "Getting There";

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-message").textContent =
    timeUp
      ? "Time is up! Review your answers and strengthen the concepts you missed."
      : `You answered ${correct} out of ${questions.length} questions correctly.`;

  const ring = document.querySelector(".score-ring");
  ring.style.background = `conic-gradient(var(--accent) 0deg, var(--accent-2) ${percentage * 3.6}deg, #1b2233 ${percentage * 3.6}deg)`;
}

function toggleReview() {
  const review = document.getElementById("review");
  review.classList.toggle("hidden");

  if (!review.dataset.loaded) {
    review.innerHTML = "";
    questions.forEach((item, i) => {
      const selected = answers[i];
      const isCorrect = selected === item.answer;
      const status = selected === null ? "Unanswered" : isCorrect ? "Correct" : "Wrong";
      const selectedText = selected === null ? "No answer" : item.options[selected];
      const correctText = item.options[item.answer];

      const div = document.createElement("div");
      div.className = `review-item ${isCorrect ? "correct" : "wrong"}`;
      div.innerHTML = `
        <strong>${i + 1}. ${escapeHtml(item.q)} <span>• ${status}</span></strong>
        <div class="review-answer">Your answer: ${escapeHtml(selectedText)}</div>
        <div class="review-answer">Correct answer: ${escapeHtml(correctText)}</div>
      `;
      review.appendChild(div);
    });
    review.dataset.loaded = "true";
  }
}

function restartQuiz() {
  current = 0;
  answers = Array(questions.length).fill(null);
  timeLeft = 15 * 60;
  document.getElementById("review").classList.add("hidden");
  document.getElementById("review").dataset.loaded = "";
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
