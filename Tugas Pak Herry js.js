const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

let score = 0;
let currentAnswer = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateQuestion() {
  const types = ["persegi", "persegi panjang", "lingkaran"];
  const type = types[Math.floor(Math.random() * types.length)];
  let question = "";
  let answer = 0;

  if (type === "persegi") {
    const sisi = getRandomInt(2, 10);
    question = `Berapakah luas persegi dengan sisi ${sisi} cm?`;
    answer = sisi * sisi;
  } else if (type === "persegi panjang") {
    const p = getRandomInt(2, 10);
    const l = getRandomInt(2, 10);
    question = `Berapakah keliling persegi panjang dengan panjang ${p} cm dan lebar ${l} cm?`;
    answer = 2 * (p + l);
  } else if (type === "lingkaran") {
    const r = getRandomInt(1, 10);
    question = `Berapakah luas lingkaran dengan jari-jari ${r} cm? (Gunakan π ≈ 3.14)`;
    answer = Math.round(3.14 * r * r);
  }

  currentAnswer = answer;
  questionEl.textContent = question;
  answerEl.value = "";
  feedbackEl.textContent = "";
}

function checkAnswer() {
  const userAnswer = Number(answerEl.value);
  if (userAnswer === currentAnswer) {
    feedbackEl.textContent = "✅ Benar! Hebat!";
    feedbackEl.style.color = "green";
    score += 10;
  } else {
    feedbackEl.textContent = `❌ Salah! Jawaban yang benar adalah ${currentAnswer}`;
    feedbackEl.style.color = "red";
    score = Math.max(score - 5, 0);
  }
  scoreEl.textContent = score;
  setTimeout(generateQuestion, 2000);
}

// Mulai game pertama kali
generateQuestion();
