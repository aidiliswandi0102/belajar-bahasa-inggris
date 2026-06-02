/* ─── DATA ───────────────────────────────── */
const levelQuizData = {
  level1: [
    { question: "What does 'Good evening' mean?", options: ["Good morning", "Good night", "Good afternoon", "Good day"], answer: 1 },
    { question: "Choose the correct sentence for a daily routine:", options: ["He go to school.", "He goes to school.", "He going to school.", "He goed to school."], answer: 1 },
    { question: "What does 'I am learning' mean?", options: ["I am studying", "I am playing", "I am eating", "I am sleeping"], answer: 0 },
    { question: "Which word means 'Thank you'?", options: ["Please", "Thank you", "Hello", "Goodbye"], answer: 1 },
  ],
  level2: [
    { question: "Choose the correct Present Continuous form:", options: ["She are studying.", "She am studying.", "She is studying.", "She be studying."], answer: 2 },
    { question: "What does 'I have been there before' mean?", options: ["I have never been there", "I am going there now", "I have been there previously", "I will go there"], answer: 2 },
    { question: "Which is the most polite way to make a request?", options: ["Give me that.", "Can you give me that?", "You must give me that.", "Give me that now!"], answer: 1 },
    { question: "Which verb fits: 'She ___ playing tennis every weekend.'", options: ["go", "goes", "is going", "going"], answer: 1 },
    { question: "What is the Past Participle of 'eat'?", options: ["eated", "eaten", "eating", "eats"], answer: 1 },
  ],
  level3: [
    { question: "Choose the correct conditional sentence (If clause):", options: ["If I were you, I would go.", "If I am you, I will go.", "If I was you, I would went.", "If I had been you, I went."], answer: 0 },
    { question: "Convert to Passive Voice: 'They built a new hospital.'", options: ["A new hospital is being built.", "A new hospital was built.", "A new hospital built.", "A new hospital been built."], answer: 1 },
    { question: "Which is the correct reported speech of 'She said, \"I am very tired.\"'?", options: ["She said she is very tired.", "She said that she was very tired.", "She said she was very tired.", "Both B and C are correct"], answer: 3 },
    { question: "Choose the correct articles: '___ more practice makes ___ perfect.'", options: ["A, a", "The, the", "A, the", "The, a"], answer: 0 },
    { question: "What does the phrasal verb 'give up' mean?", options: ["To hand over", "To quit / surrender", "To share", "To end"], answer: 1 },
    { question: "Which sentence uses Present Perfect correctly?", options: ["I have went to the store.", "I have been to the store.", "I have being to the store.", "I has been to the store."], answer: 1 },
  ],
  level4: [
    { question: "Choose the sentence with the most appropriate relative clause:", options: ["The book which I read it was interesting.", "The book that I read was interesting.", "The book which that I read was interesting.", "The book what I read was interesting."], answer: 1 },
    { question: "Which is the correct inverted conditional?", options: ["Had I known, I would have helped.", "Have I known, I would helped.", "If I had known, I helped.", "Should I known, I would help."], answer: 0 },
    { question: "Convert to a cleft sentence emphasizing 'John': 'John broke the vase.'", options: ["It was John that broke the vase.", "It was John who broke the vase.", "It was John the vase broke.", "Both A and B are correct"], answer: 3 },
    { question: "Which noun phrase is grammatically correct?", options: ["The big red car that parked outside.", "The big red car parked outside.", "The big red car which is parked outside.", "Both B and C are correct"], answer: 3 },
    { question: "What does the idiom 'once in a blue moon' mean?", options: ["Once a month", "Very rarely", "During a full moon", "Every month"], answer: 1 },
    { question: "Choose the correct use of subjunctive mood:", options: ["I suggest that he goes there.", "I suggest that he go there.", "I suggest that he would go there.", "I suggest that he went there."], answer: 1 },
    { question: "Which sentence is a correct use of ellipsis?", options: ["She can speak English, and her brother can too.", "She can speak English, and can too her brother.", "She can speak English, and her brother cannot too.", "She can speak English, her brother can too."], answer: 0 },
  ],
};

const levelInfo = {
  level1: { name: "Level 1", difficulty: "Beginner", desc: "Vocabulary & basic grammar", color: "#4caf82", icon: "🌱" },
  level2: { name: "Level 2", difficulty: "Intermediate", desc: "Tenses & expressions", color: "#c9a84c", icon: "🔥" },
  level3: { name: "Level 3", difficulty: "Advanced", desc: "Complex grammar & idioms", color: "#c96c5a", icon: "⚡" },
  level4: { name: "Level 4", difficulty: "Expert", desc: "Advanced grammar & nuance", color: "#a78bfa", icon: "💎" },
};

const flashcardsData = [
  { front: 'Travel', back: 'Bepergian' },
  { front: 'Journey', back: 'Perjalanan' },
  { front: 'Discover', back: 'Menemukan' },
  { front: 'Delicious', back: 'Lezat' },
  { front: 'Brave', back: 'Berani' },
  { front: 'Improve', back: 'Meningkatkan' },
];

const wordOfDayData = [
  { word: 'Curious', meaning: 'having a strong desire to know or learn', example: 'She was curious about how the machine worked.', tip: 'Use this word when asking or exploring new topics.' },
  { word: 'Brilliant', meaning: 'exceptionally clever or talented', example: 'His idea was brilliant and easy to understand.', tip: "Great for praising someone's work or achievement." },
  { word: 'Practice', meaning: 'the repeated exercise of an activity', example: 'Practice every day to improve your English.', tip: 'Often used in the context of learning and skill-building.' },
  { word: 'Confident', meaning: "feeling certain about one's abilities", example: 'She felt confident speaking in front of the class.', tip: 'Use to express certainty in your own skills.' },
  { word: 'Persevere', meaning: 'to continue despite difficulty', example: 'He persevered through the tough lessons.', tip: 'Collocates well with "through" and "despite".' },
  { word: 'Eloquent', meaning: 'fluent and persuasive in speaking', example: 'The speaker gave an eloquent presentation.', tip: 'Often used to describe great speeches or writing.' },
];

const tabHeaders = {
  home:       { title: '', sub: '' },
  'word-day': { title: 'Word of the Day', sub: 'Build your vocabulary one word at a time.' },
  flashcards: { title: 'Flashcard Challenge', sub: 'Click a card to reveal its translation.' },
  vocabulary: { title: 'Study Materials', sub: 'Vocabulary, grammar, and conversation practice.' },
  practice:   { title: 'Leveled Practice', sub: 'Complete each level to unlock the next.' },
  profile:    { title: 'Profile', sub: 'Kenali pembuat English Lab.' },
};

/* ─── DOM REFS ───────────────────────────── */
const $ = id => document.getElementById(id);
const heroSection     = $('heroSection');
const pageHeader      = $('pageHeader');
const pageHeaderTitle = $('pageHeaderTitle');
const pageHeaderSub   = $('pageHeaderSub');
const heroWord        = $('heroWord');
const wordText        = $('wordText');
const wordMeaning     = $('wordMeaning');
const wordExample     = $('wordExample');
const dailyTip        = $('dailyTip');
const newWordBtn      = $('newWordBtn');
const flashcardGrid   = $('flashcardGrid');
const shuffleCards    = $('shuffleCards');
const cardCount       = $('cardCount');
const levelsGrid      = $('levelsGrid');
const levelSelView    = $('levelSelectionView');
const quizView        = $('quizView');
const backBtn         = $('backBtn');
const levelBadge      = $('levelBadge');
const quizScore       = $('quizScore');
const quizContainer   = $('quiz');
const checkBtn        = $('checkBtn');
const resetBtn        = $('resetBtn');
const result          = $('result');

let currentLevel = null;

/* ─── TAB SYSTEM ─────────────────────────── */
function switchTab(tabName) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  const navTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
  if (navTab) navTab.classList.add('active');
  const panel = $(`tab-${tabName}`);
  if (panel) panel.classList.add('active');

  if (tabName === 'home') {
    heroSection.style.display = '';
    pageHeader.classList.add('hidden');
  } else {
    heroSection.style.display = 'none';
    pageHeader.classList.remove('hidden');
    const hdr = tabHeaders[tabName];
    pageHeaderTitle.textContent = hdr.title;
    pageHeaderSub.textContent = hdr.sub;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    switchTab(tab.dataset.tab);
  });
});

document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.nav));
});

/* ─── WORD OF DAY ────────────────────────── */
let currentWordIndex = 0;

function renderWord(item) {
  wordText.textContent = item.word;
  wordMeaning.textContent = 'Meaning: ' + item.meaning;
  wordExample.textContent = '"' + item.example + '"';
  dailyTip.textContent = item.tip;
  if (heroWord) heroWord.textContent = item.word;
}

function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % wordOfDayData.length;
  wordText.style.opacity = 0;
  setTimeout(() => {
    renderWord(wordOfDayData[currentWordIndex]);
    wordText.style.opacity = 1;
  }, 180);
}

newWordBtn.addEventListener('click', nextWord);
wordText.style.transition = 'opacity 0.18s';

/* ─── FLASHCARDS ─────────────────────────── */
function shuffle(arr) {
  return arr.map(v => ({ v, s: Math.random() })).sort((a, b) => a.s - b.s).map(({ v }) => v);
}

function renderFlashcards(cards) {
  cardCount.textContent = `${cards.length} cards`;
  flashcardGrid.innerHTML = cards.map((c, i) => `
    <button class="flashcard-card" data-index="${i}" aria-label="Flashcard: ${c.front}">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <p class="fc-front-word">${c.front}</p>
          <p class="fc-hint">Click to reveal</p>
        </div>
        <div class="flashcard-back">
          <p class="fc-back-word">${c.back}</p>
          <p class="fc-back-sub">Indonesian translation</p>
        </div>
      </div>
    </button>
  `).join('');
}

flashcardGrid.addEventListener('click', e => {
  const card = e.target.closest('.flashcard-card');
  if (card) card.classList.toggle('flipped');
});
shuffleCards.addEventListener('click', () => renderFlashcards(shuffle(flashcardsData)));

/* ─── LEVEL SYSTEM ───────────────────────── */
function getCompleted() {
  try { return JSON.parse(localStorage.getItem('englabCompleted') || '[]'); }
  catch { return []; }
}
function isCompleted(n) { return getCompleted().includes(n); }
function isUnlocked(n) { return n === 1 || isCompleted(n - 1); }
function markCompleted(n) {
  const c = getCompleted();
  if (!c.includes(n)) { c.push(n); localStorage.setItem('englabCompleted', JSON.stringify(c)); }
}

function renderLevels() {
  levelSelView.style.display = '';
  quizView.style.display = 'none';
  currentLevel = null;

  levelsGrid.innerHTML = Array.from({ length: 4 }, (_, i) => {
    const n = i + 1;
    const key = `level${n}`;
    const info = levelInfo[key];
    const unlocked = isUnlocked(n);
    const completed = isCompleted(n);
    const icon = completed ? '✓' : unlocked ? info.icon : '🔒';
    const diffStyle = `color:${info.color}`;

    return `
      <button class="level-card${!unlocked ? ' locked' : ''}${completed ? ' completed' : ''}"
        ${unlocked ? `onclick="startLevel(${n})"` : 'disabled'}
        style="--lc-color:${info.color}">
        <div class="lc-icon">${icon}</div>
        <div class="lc-name">${info.name}</div>
        <div class="lc-diff" style="${diffStyle}">${info.difficulty}</div>
        <div class="lc-desc">${info.desc}</div>
        <div class="lc-count">${levelQuizData[key].length} questions</div>
        ${!unlocked ? `<div class="lc-lock">Complete level ${n - 1} first</div>` : ''}
      </button>`;
  }).join('');
}

window.startLevel = function (n) {
  if (!isUnlocked(n)) return;
  currentLevel = n;
  const key = `level${n}`;
  levelSelView.style.display = 'none';
  quizView.style.display = '';
  levelBadge.textContent = levelInfo[key].name;
  renderQuiz(levelQuizData[key]);
  result.textContent = '';
  result.className = 'result-msg';
};

function renderQuiz(data) {
  quizContainer.innerHTML = data.map((item, idx) => `
    <div class="quiz-question">
      <h3>${idx + 1}. ${item.question}</h3>
      <div class="options">
        ${item.options.map((opt, oi) => `
          <label class="option">
            <input type="radio" name="q${idx}" value="${oi}">
            ${opt}
          </label>`).join('')}
      </div>
    </div>`).join('');
  checkBtn.disabled = false;
  updateScore(0, data.length);
}

function updateScore(s, t) { quizScore.textContent = `${s} / ${t} correct`; }

/* ─── CHECK ANSWERS ──────────────────────── */
checkBtn.addEventListener('click', () => {
  const key = `level${currentLevel}`;
  const data = levelQuizData[key];
  const answers = data.map((_, i) => {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    return sel ? +sel.value : null;
  });

  if (answers.includes(null)) {
    result.className = 'result-msg warn';
    result.textContent = 'Please answer all questions before checking.';
    return;
  }

  data.forEach((item, i) => {
    const questionEl = quizContainer.querySelectorAll('.quiz-question')[i];
    const labels = questionEl.querySelectorAll('.option');
    labels.forEach((label, oi) => {
      label.classList.remove('correct', 'wrong');
      label.querySelector('input').disabled = true;
      if (oi === item.answer) {
        label.classList.add('correct');
      } else if (oi === answers[i]) {
        label.classList.add('wrong');
      }
    });
  });

  checkBtn.disabled = true;

  const score = answers.filter((a, i) => a === data[i].answer).length;
  const passed = (score / data.length) >= 0.8;
  updateScore(score, data.length);

  if (passed) {
    markCompleted(currentLevel);
    result.className = 'result-msg pass';
    result.textContent = `Score: ${score}/${data.length} — Excellent! You passed Level ${currentLevel}! 🎉`;
  } else {
    result.className = 'result-msg fail';
    result.textContent = `Score: ${score}/${data.length} — You need ${Math.ceil(data.length * 0.8 - score)} more correct to pass. Try again!`;
  }
});

resetBtn.addEventListener('click', () => {
  renderQuiz(levelQuizData[`level${currentLevel}`]);
  result.textContent = '';
  result.className = 'result-msg';
});

backBtn.addEventListener('click', renderLevels);

/* ─── INIT ───────────────────────────────── */
renderWord(wordOfDayData[0]);
renderFlashcards(flashcardsData);
renderLevels();
switchTab('home');
