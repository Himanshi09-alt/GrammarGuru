"use strict";

/* =========================================================
   1. QUESTION BANK
   Each question: { id, category, options: [A, B], correctIndex, explanation }
   correctIndex is 0 for option A and 1 for option B.
   ========================================================= */
const CATEGORIES = [
  "Subject-verb agreement", "Tenses (present/past/future)", "Articles", "Prepositions",
  "Pronouns", "Singular/plural nouns", "Adverbs", "Modal verbs",
  "Comparatives/superlatives", "Sentence structure"
];

const QUESTION_BANK = [
  // Subject-verb agreement
  { id: "sva-1", category: "Subject-verb agreement", options: ["She walks to school every day.", "She walk to school every day."], correctIndex: 0, explanation: "A third-person singular subject (she, he, it) takes a verb ending in -s in the present simple." },
  { id: "sva-2", category: "Subject-verb agreement", options: ["The books on the table is mine.", "The books on the table are mine."], correctIndex: 1, explanation: "The verb agrees with the subject 'books' (plural), not with 'table'." },
  { id: "sva-3", category: "Subject-verb agreement", options: ["Everyone in the class like the teacher.", "Everyone in the class likes the teacher."], correctIndex: 1, explanation: "'Everyone' is singular, so the verb needs -s." },
  { id: "sva-4", category: "Subject-verb agreement", options: ["My brother and my sister play tennis.", "My brother and my sister plays tennis."], correctIndex: 0, explanation: "Two subjects joined by 'and' are plural, so use the plural verb form." },
  { id: "sva-5", category: "Subject-verb agreement", options: ["The news are surprising.", "The news is surprising."], correctIndex: 1, explanation: "'News' looks plural but is an uncountable noun, so it takes a singular verb." },

  // Tenses
  { id: "ten-1", category: "Tenses (present/past/future)", options: ["I have visited Paris last year.", "I visited Paris last year."], correctIndex: 1, explanation: "A finished time like 'last year' needs the past simple, not the present perfect." },
  { id: "ten-2", category: "Tenses (present/past/future)", options: ["Look! It is raining now.", "Look! It rains now."], correctIndex: 0, explanation: "Use the present continuous for an action happening right now." },
  { id: "ten-3", category: "Tenses (present/past/future)", options: ["I will call you when I will arrive.", "I will call you when I arrive."], correctIndex: 1, explanation: "After 'when' in a future sentence, use the present simple, not 'will'." },
  { id: "ten-4", category: "Tenses (present/past/future)", options: ["She has lived here since 2019.", "She lives here since 2019."], correctIndex: 0, explanation: "'Since' with a starting point in the past needs the present perfect." },
  { id: "ten-5", category: "Tenses (present/past/future)", options: ["Yesterday we go to the cinema.", "Yesterday we went to the cinema."], correctIndex: 1, explanation: "'Yesterday' signals the past, so use the past simple 'went'." },

  // Articles
  { id: "art-1", category: "Articles", options: ["She is an engineer.", "She is a engineer."], correctIndex: 0, explanation: "Use 'an' before a vowel sound. 'Engineer' starts with the vowel sound /e/." },
  { id: "art-2", category: "Articles", options: ["I saw a movie last night. A movie was great.", "I saw a movie last night. The movie was great."], correctIndex: 1, explanation: "Use 'the' for something already mentioned." },
  { id: "art-3", category: "Articles", options: ["Sun rises in the east.", "The sun rises in the east."], correctIndex: 1, explanation: "Use 'the' with things that are unique, such as the sun." },
  { id: "art-4", category: "Articles", options: ["She wants to be doctor.", "She wants to be a doctor."], correctIndex: 1, explanation: "A singular countable noun for a job needs an article." },
  { id: "art-5", category: "Articles", options: ["It takes a hour to get there.", "It takes an hour to get there."], correctIndex: 1, explanation: "The 'h' in 'hour' is silent, so the word starts with a vowel sound and needs 'an'." },

  // Prepositions
  { id: "pre-1", category: "Prepositions", options: ["I was born in 2002.", "I was born at 2002."], correctIndex: 0, explanation: "Use 'in' with years, months and seasons." },
  { id: "pre-2", category: "Prepositions", options: ["The meeting is in Monday.", "The meeting is on Monday."], correctIndex: 1, explanation: "Use 'on' with days of the week." },
  { id: "pre-3", category: "Prepositions", options: ["She is good at maths.", "She is good in maths."], correctIndex: 0, explanation: "The adjective 'good' is followed by 'at' for skills." },
  { id: "pre-4", category: "Prepositions", options: ["We arrived to the airport.", "We arrived at the airport."], correctIndex: 1, explanation: "Use 'arrive at' with a specific place like an airport or station." },
  { id: "pre-5", category: "Prepositions", options: ["I am interested in music.", "I am interested on music."], correctIndex: 0, explanation: "The adjective 'interested' is followed by 'in'." },

  // Pronouns
  { id: "pro-1", category: "Pronouns", options: ["The teacher gave she the book.", "The teacher gave her the book."], correctIndex: 1, explanation: "After a verb, use an object pronoun (her, him, them), not a subject pronoun." },
  { id: "pro-2", category: "Pronouns", options: ["That bag is yours.", "That bag is your."], correctIndex: 0, explanation: "When no noun follows, use the possessive pronoun 'yours'." },
  { id: "pro-3", category: "Pronouns", options: ["He hurt him while playing football.", "He hurt himself while playing football."], correctIndex: 1, explanation: "Use a reflexive pronoun when the subject and object are the same person." },
  { id: "pro-4", category: "Pronouns", options: ["Them are my friends.", "They are my friends."], correctIndex: 1, explanation: "The subject of a sentence needs a subject pronoun: 'they', not 'them'." },
  { id: "pro-5", category: "Pronouns", options: ["Anna and I are cousins.", "Anna and me are cousins."], correctIndex: 0, explanation: "'Anna and I' is the subject, so use the subject pronoun 'I'." },

  // Singular/plural nouns
  { id: "plu-1", category: "Singular/plural nouns", options: ["There are three childs in the room.", "There are three children in the room."], correctIndex: 1, explanation: "'Child' has an irregular plural: 'children'." },
  { id: "plu-2", category: "Singular/plural nouns", options: ["She has two babies.", "She has two babys."], correctIndex: 0, explanation: "For nouns ending in consonant + y, change y to -ies in the plural." },
  { id: "plu-3", category: "Singular/plural nouns", options: ["My feet are cold.", "My foots are cold."], correctIndex: 0, explanation: "'Foot' has an irregular plural: 'feet'." },
  { id: "plu-4", category: "Singular/plural nouns", options: ["I need some informations.", "I need some information."], correctIndex: 1, explanation: "'Information' is uncountable and has no plural form." },
  { id: "plu-5", category: "Singular/plural nouns", options: ["The knifes are in the drawer.", "The knives are in the drawer."], correctIndex: 1, explanation: "Many nouns ending in -fe change to -ves in the plural." },

  // Adverbs
  { id: "adv-1", category: "Adverbs", options: ["She speaks English fluently.", "She speaks English fluent."], correctIndex: 0, explanation: "An adverb (fluently) describes how an action is done. 'Fluent' is an adjective." },
  { id: "adv-2", category: "Adverbs", options: ["He drives very careful.", "He drives very carefully."], correctIndex: 1, explanation: "Use the adverb 'carefully' to describe the verb 'drives'." },
  { id: "adv-3", category: "Adverbs", options: ["She always arrives on time.", "She arrives always on time."], correctIndex: 0, explanation: "Adverbs of frequency usually go before the main verb." },
  { id: "adv-4", category: "Adverbs", options: ["He worked hardly to pass the exam.", "He worked hard to pass the exam."], correctIndex: 1, explanation: "'Hard' is both an adjective and an adverb. 'Hardly' means 'almost not'." },
  { id: "adv-5", category: "Adverbs", options: ["The test was easy and I did well.", "The test was easy and I did good."], correctIndex: 0, explanation: "'Did' is a verb, so use the adverb 'well', not the adjective 'good'." },

  // Modal verbs
  { id: "mod-1", category: "Modal verbs", options: ["You must to wear a helmet.", "You must wear a helmet."], correctIndex: 1, explanation: "Modal verbs are followed by the base verb without 'to'." },
  { id: "mod-2", category: "Modal verbs", options: ["She can swim very well.", "She cans swim very well."], correctIndex: 0, explanation: "Modal verbs never add -s, even with he, she or it." },
  { id: "mod-3", category: "Modal verbs", options: ["Should I to call him?", "Should I call him?"], correctIndex: 1, explanation: "After 'should', use the base verb without 'to'." },
  { id: "mod-4", category: "Modal verbs", options: ["You should see a doctor.", "You should seeing a doctor."], correctIndex: 0, explanation: "A modal verb is followed by the base form of the verb." },
  { id: "mod-5", category: "Modal verbs", options: ["He might arrives late.", "He might arrive late."], correctIndex: 1, explanation: "After 'might', use the base verb with no -s." },

  // Comparatives/superlatives
  { id: "com-1", category: "Comparatives/superlatives", options: ["This book is more interesting than that one.", "This book is interestinger than that one."], correctIndex: 0, explanation: "Long adjectives (three or more syllables) use 'more' instead of -er." },
  { id: "com-2", category: "Comparatives/superlatives", options: ["She is the most tall girl in the class.", "She is the tallest girl in the class."], correctIndex: 1, explanation: "Short adjectives form the superlative with -est: 'tallest'." },
  { id: "com-3", category: "Comparatives/superlatives", options: ["Today is more hot than yesterday.", "Today is hotter than yesterday."], correctIndex: 1, explanation: "One-syllable adjectives take -er, and 'hot' doubles the final t." },
  { id: "com-4", category: "Comparatives/superlatives", options: ["This is the best pizza I have ever eaten.", "This is the goodest pizza I have ever eaten."], correctIndex: 0, explanation: "'Good' is irregular: good, better, best." },
  { id: "com-5", category: "Comparatives/superlatives", options: ["Her English is worse than mine.", "Her English is more bad than mine."], correctIndex: 0, explanation: "'Bad' is irregular: bad, worse, worst." },

  // Sentence structure
  { id: "str-1", category: "Sentence structure", options: ["I like very much pizza.", "I like pizza very much."], correctIndex: 1, explanation: "Do not put an adverb between a verb and its object. Place 'very much' after the object." },
  { id: "str-2", category: "Sentence structure", options: ["Where is the station?", "Where the station is?"], correctIndex: 0, explanation: "In a direct question, the verb comes before the subject." },
  { id: "str-3", category: "Sentence structure", options: ["She asked me where did I live.", "She asked me where I lived."], correctIndex: 1, explanation: "In reported questions, use normal statement word order." },
  { id: "str-4", category: "Sentence structure", options: ["Although it was raining, we went out.", "Although it was raining, but we went out."], correctIndex: 0, explanation: "Do not use 'although' and 'but' together in the same sentence." },
  { id: "str-5", category: "Sentence structure", options: ["She went home, she was tired.", "She went home because she was tired."], correctIndex: 1, explanation: "Two full clauses need a joining word such as 'because'. A comma alone is not enough." }
];

/* =========================================================
   2. DOM ELEMENT REFERENCES
   ========================================================= */
const $ = (id) => document.getElementById(id);
const screens = {
  welcome: $("screen-welcome"),
  game: $("screen-game"),
  results: $("screen-results"),
  mistakes: $("screen-mistakes")
};
const screenHeadings = {
  welcome: $("welcome-title"),
  game: $("game-title"),
  results: $("results-title"),
  mistakes: $("mistakes-title")
};
const els = {
  topic: $("topic-select"), difficulty: $("difficulty-select"), age: $("age-input"),
  levelSuggestion: $("level-suggestion"), startError: $("start-error"), welcomeBest: $("welcome-best"),
  questionCount: $("question-count"), score: $("score"), progress: $("progress"),
  category: $("category"), options: [$("option-0"), $("option-1")],
  feedback: $("feedback"), checkBtn: $("check-btn"), nextBtn: $("next-btn"),
  resultsScore: $("results-score"), resultsPercent: $("results-percent"),
  resultsCounts: $("results-counts"), resultsMessage: $("results-message"),
  resultsBest: $("results-best"), reviewBtn: $("review-btn"), mistakesList: $("mistakes-list")
};

/* =========================================================
   3. CENTRAL STATE (all round data lives here)
   ========================================================= */
const ALL_TOPICS = "all";
const state = {
  screen: "welcome",
  topic: ALL_TOPICS,
  difficulty: "all",
  questions: [],      // this round's questions (options already shuffled)
  currentIndex: 0,
  selectedIndex: null,
  isAnswered: false,
  score: 0,
  mistakes: []        // { question, selectedIndex } for wrong answers only
};

/* =========================================================
   4. QUESTION-BANK VALIDATION (warns, never silently repairs)
   ========================================================= */
function validateQuestionBank() {
  const seenIds = new Set();
  QUESTION_BANK.forEach((q, i) => {
    const label = `Question #${i + 1} (${q && q.id})`;
    if (!q || typeof q.id !== "string" || q.id === "") console.warn(`${label}: missing id`);
    else if (seenIds.has(q.id)) console.warn(`${label}: duplicate id`);
    else seenIds.add(q.id);
    if (!CATEGORIES.includes(q.category)) console.warn(`${label}: invalid category`);
    if (!Array.isArray(q.options) || q.options.length !== 2 ||
        q.options.some((o) => typeof o !== "string" || o === "")) {
      console.warn(`${label}: must have exactly two non-empty string options`);
    }
    if (q.correctIndex !== 0 && q.correctIndex !== 1) console.warn(`${label}: correctIndex must be 0 or 1`);
    if (typeof q.explanation !== "string" || q.explanation === "") console.warn(`${label}: missing explanation`);
  });
  CATEGORIES.forEach((c) => {
    if (QUESTION_BANK.filter((q) => q.category === c).length < 5) console.warn(`Category "${c}" has fewer than 5 questions`);
  });
}

/* =========================================================
   5. RANDOMIZATION
   ========================================================= */
// Fisher-Yates: walk backwards, swap each item with a random earlier (or same) position.
// Works on a copy, so the original array is never changed.
function shuffleArray(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Returns a copy of the question with options in random order.
// We remember the correct sentence first, then find where it ended up.
function shuffleQuestionOptions(question) {
  const correctSentence = question.options[question.correctIndex];
  const shuffled = shuffleArray(question.options);
  return { ...question, options: shuffled, correctIndex: shuffled.indexOf(correctSentence) };
}

// All Topics: one random question from each of the 10 categories (10 distinct questions).
// Single topic: every question in that category (no padding, no repeats).
function getQuestionDifficulty(question) {
  // Current question IDs end in 1–5 in each category:
  // 1–2 beginner, 3–4 intermediate, 5 advanced.
  const match = question.id.match(/-(\d+)$/);
  const number = match ? Number(match[1]) : 1;
  if (number <= 2) return "beginner";
  if (number <= 4) return "intermediate";
  return "advanced";
}

function createRound(topic, difficulty = "all") {
  let pool = QUESTION_BANK.filter((q) =>
    (topic === ALL_TOPICS || q.category === topic) &&
    (difficulty === "all" || getQuestionDifficulty(q) === difficulty)
  );

  if (topic === ALL_TOPICS) {
    pool = CATEGORIES.map((category) =>
      shuffleArray(pool.filter((q) => q.category === category))[0]
    ).filter(Boolean);
  }
  return shuffleArray(pool).map(shuffleQuestionOptions);
}

/* =========================================================
   6. LOCALSTORAGE (best score only)
   ========================================================= */
const BEST_SCORE_KEY = "grammarGuruBestScore";

function isValidResult(r) {
  return r !== null && typeof r === "object" && Number.isInteger(r.score) &&
         Number.isInteger(r.total) && r.total > 0 && r.score >= 0 && r.score <= r.total;
}

// Returns {score, total} or null if missing, corrupt or storage is blocked.
function loadBestScore() {
  try {
    const raw = localStorage.getItem(BEST_SCORE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw);
    return isValidResult(parsed) ? parsed : null;
  } catch (error) {
    return null;
  }
}

function saveBestScore(result) {
  if (!isValidResult(result)) return;   // never write an invalid record
  try {
    localStorage.setItem(BEST_SCORE_KEY, JSON.stringify({ score: result.score, total: result.total }));
  } catch (error) {
    console.warn("Could not save best score:", error);
  }
}

// Compare by percentage using cross-multiplication (avoids rounding problems).
// A tie keeps the existing record.
function isBetterResult(newResult, oldResult) {
  return newResult.score * oldResult.total > oldResult.score * newResult.total;
}

function calculatePercentage(score, total) {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}

function formatBest(best) {
  return `Best score: ${best.score} / ${best.total} (${calculatePercentage(best.score, best.total)}%)`;
}

/* =========================================================
   7. ROUND INITIALIZATION
   ========================================================= */
function startRound(topic, difficulty = els.difficulty.value) {
  const questions = createRound(topic, difficulty);
  if (questions.length === 0) {
    els.startError.textContent = "No questions are available for this topic.";
    els.startError.hidden = false;
    showScreen("welcome");
    return;
  }
  els.startError.hidden = true;
  state.topic = topic;
  state.difficulty = difficulty;
  state.questions = questions;
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.isAnswered = false;
  state.score = 0;
  state.mistakes = [];
  showScreen("game");
}

/* =========================================================
   8. SCREEN NAVIGATION AND RENDERING
   ========================================================= */
function showScreen(name) {
  if (!Object.prototype.hasOwnProperty.call(screens, name)) {
    console.warn(`Unknown screen: ${name}`);
    return;
  }
  state.screen = name;
  Object.keys(screens).forEach((key) => { screens[key].hidden = key !== name; });
  if (name === "welcome") renderWelcomeScreen();
  if (name === "game") renderGameScreen();
  if (name === "results") renderResultsScreen();
  if (name === "mistakes") renderMistakesScreen();
  screenHeadings[name].focus();   // accessibility: announce the new screen
}

function renderWelcomeScreen() {
  const best = loadBestScore();
  els.welcomeBest.hidden = best === null;
  if (best) els.welcomeBest.textContent = formatBest(best);
}

function renderGameScreen() {
  const question = state.questions[state.currentIndex];
  const total = state.questions.length;

  els.questionCount.textContent = `Question ${state.currentIndex + 1} of ${total}`;
  els.score.textContent = `Score: ${state.score}`;
  els.category.textContent = `Category: ${question.category}`;

  // Progress counts only questions that have been checked.
  const completed = state.currentIndex + (state.isAnswered ? 1 : 0);
  els.progress.max = total;
  els.progress.value = completed;
  els.progress.setAttribute("aria-label", `${completed} of ${total} questions completed`);

  question.options.forEach((sentence, i) => {
    const button = els.options[i];
    const isSelected = state.selectedIndex === i;
    const isCorrect = i === question.correctIndex;
    button.querySelector(".option-text").textContent = sentence;
    button.disabled = state.isAnswered;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("selected", isSelected && !state.isAnswered);
    button.classList.toggle("correct", state.isAnswered && isCorrect);
    button.classList.toggle("incorrect", state.isAnswered && isSelected && !isCorrect);

    // Text label so colour is never the only signal.
    let label = "";
    if (state.isAnswered) {
      if (isSelected && isCorrect) label = "Your answer (correct)";
      else if (isSelected) label = "Your answer (incorrect)";
      else if (isCorrect) label = "Correct answer";
    }
    button.querySelector(".option-status").textContent = label;
  });

  els.checkBtn.hidden = state.isAnswered;
  els.checkBtn.disabled = state.selectedIndex === null;
  els.nextBtn.hidden = !state.isAnswered;
  els.nextBtn.textContent = state.currentIndex === total - 1 ? "See Results" : "Next Question";

  renderFeedback(question);
}

function renderFeedback(question) {
  els.feedback.replaceChildren();
  if (!state.isAnswered) return;
  const wasCorrect = state.selectedIndex === question.correctIndex;
  const title = document.createElement("p");
  title.className = "feedback-title " + (wasCorrect ? "ok" : "bad");
  title.textContent = wasCorrect ? "Correct!" : "Not quite!";
  const explanation = document.createElement("p");
  explanation.textContent = question.explanation;
  els.feedback.append(title, explanation);
}

/* =========================================================
   9. ANSWER SELECTION AND CHECKING
   ========================================================= */
function selectAnswer(index) {
  if (state.screen !== "game" || state.isAnswered) return;   // locked after checking
  state.selectedIndex = index;
  renderGameScreen();
}

function checkAnswer() {
  if (state.isAnswered || state.selectedIndex === null) return;   // blocks double scoring
  const question = state.questions[state.currentIndex];
  state.isAnswered = true;
  if (state.selectedIndex === question.correctIndex) {
    state.score += 1;
  } else {
    state.mistakes.push({ question, selectedIndex: state.selectedIndex });
  }
  renderGameScreen();
  els.nextBtn.focus();
}

function goToNextQuestion() {
  if (!state.isAnswered) return;   // cannot skip an unchecked question
  if (state.currentIndex >= state.questions.length - 1) {
    finishRound();
    return;
  }
  state.currentIndex += 1;
  state.selectedIndex = null;
  state.isAnswered = false;
  renderGameScreen();
  screenHeadings.game.focus();
}

function restartGame() {
  if (window.confirm("Restart the game? Your current progress will be lost.")) {
    startRound(state.topic, state.difficulty);
  }
}

/* =========================================================
   10. RESULTS AND MISTAKE REVIEW
   ========================================================= */
function finishRound() {
  const result = { score: state.score, total: state.questions.length };
  const best = loadBestScore();
  if (best === null || isBetterResult(result, best)) saveBestScore(result);
  showScreen("results");
}

function getPerformanceMessage(percent) {
  if (percent >= 90) return "Excellent work! You have a strong grasp of these grammar rules.";
  if (percent >= 70) return "Great progress! Keep practising to build confidence.";
  if (percent >= 50) return "Good effort! Review the explanations and try again.";
  return "Every attempt is progress. Learn from the feedback and give it another try.";
}

function renderResultsScreen() {
  const total = state.questions.length;
  const percent = calculatePercentage(state.score, total);
  els.resultsScore.textContent = `${state.score} / ${total}`;
  els.resultsPercent.textContent = `Percentage: ${percent}%`;
  els.resultsCounts.textContent = `Correct: ${state.score}. Incorrect: ${total - state.score}.`;
  els.resultsMessage.textContent = getPerformanceMessage(percent);
  const best = loadBestScore();
  els.resultsBest.hidden = best === null;
  if (best) els.resultsBest.textContent = formatBest(best);
  els.reviewBtn.hidden = state.mistakes.length === 0;
}

// Small helper: make a paragraph with an optional bold label.
function makeLine(label, text) {
  const p = document.createElement("p");
  if (label) {
    const strong = document.createElement("strong");
    strong.textContent = label + " ";
    p.append(strong);
  }
  p.append(document.createTextNode(text));
  return p;
}

function renderMistakesScreen() {
  els.mistakesList.replaceChildren();
  if (state.mistakes.length === 0) {
    els.mistakesList.append(makeLine("", "No mistakes this round. Well done!"));
    return;
  }
  const letters = ["A", "B"];
  state.mistakes.forEach((m) => {
    const item = document.createElement("article");
    item.className = "mistake";
    const cat = makeLine("", m.question.category);
    cat.className = "mistake-category";
    item.append(
      cat,
      makeLine("A.", m.question.options[0]),
      makeLine("B.", m.question.options[1]),
      makeLine("Your answer:", `${letters[m.selectedIndex]}. ${m.question.options[m.selectedIndex]}`),
      makeLine("Correct answer:", `${letters[m.question.correctIndex]}. ${m.question.options[m.question.correctIndex]}`),
      makeLine("Why:", m.question.explanation)
    );
    els.mistakesList.append(item);
  });
}

/* =========================================================
   11. EVENT LISTENERS
   ========================================================= */
function populateTopicSelect() {
  const all = document.createElement("option");
  all.value = ALL_TOPICS;
  all.textContent = "All Topics";
  els.topic.append(all);
  CATEGORIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    els.topic.append(opt);
  });
}

function suggestLevelFromAge() {
  const rawAge = els.age.value.trim();
  if (!rawAge) {
    els.levelSuggestion.textContent = "Choose any level or enter your age for a suggested starting point.";
    return;
  }
  const age = Number(rawAge);
  if (!Number.isInteger(age) || age < 5 || age > 100) {
    els.levelSuggestion.textContent = "Please enter an age from 5 to 100.";
    return;
  }
  // This is only a rough suggestion; users can change the level manually.
  const suggested = age < 13 ? "beginner" : age < 18 ? "intermediate" : "advanced";
  const labels = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  els.difficulty.value = suggested;
  els.levelSuggestion.textContent = `Suggested starting level: ${labels[suggested]}. You can change it whenever you like.`;
}

function addEventListeners() {
  els.age.addEventListener("input", suggestLevelFromAge);
  $("start-btn").addEventListener("click", () => startRound(els.topic.value, els.difficulty.value));
  els.options.forEach((button, i) => button.addEventListener("click", () => selectAnswer(i)));
  els.checkBtn.addEventListener("click", checkAnswer);
  els.nextBtn.addEventListener("click", goToNextQuestion);
  $("restart-btn").addEventListener("click", restartGame);
  $("play-again-btn").addEventListener("click", () => startRound(state.topic, state.difficulty));
  els.reviewBtn.addEventListener("click", () => showScreen("mistakes"));
  $("home-btn").addEventListener("click", () => showScreen("welcome"));
  $("back-results-btn").addEventListener("click", () => showScreen("results"));
}

/* =========================================================
   12. STARTUP
   ========================================================= */
validateQuestionBank();
populateTopicSelect();
addEventListeners();
renderWelcomeScreen();
