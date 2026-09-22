
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "A -Hyper Text Markup Language",
            "B- High Text Machine Language",
            "C- Hyper Tool Markup Language",
            "D- Home Text Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "A- HTML",
            "B- CSS",
            "C- Python",
            "D- C++"
        ],
        answer: 1
    },

    {
        question: "Which language makes a webpage interactive?",
        options: [
            "A- HTML",
            "B- CSS",
            "C- JavaScript",
            "D- SQL"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "A- //",
            "B- /* */",
            "C- #",
            "D- (<!-- -->)"
        ],
        answer: 0
    },

    {
        question: "Which tag creates a paragraph in HTML?",
        options: [
            "A- (h1)",
            "B- (p)",
            "C- (br)",
            "D- (div)"
        ],
        answer: 1
    }
];


// HTML Elements
const login = document.getElementById("login");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const loginForm = document.getElementById("login-form");

const username = document.getElementById("username");
const rollNo = document.getElementById("roll-no");

const welcomeUser = document.getElementById("welcome-user");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");

const nextBtn = document.getElementById("next-btn");

const scoreText = document.getElementById("score");

const restartBtn = document.getElementById("restart-btn");
const logoutBtn = document.getElementById("logout-btn");


// Variables
let currentQuestion = 0;
let score = 0;


// Login
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = username.value;

    welcomeUser.textContent = "Welcome, " + name + "!";

    login.classList.add("hidden");
    quizPage.classList.remove("hidden");

    showQuestion();
});


// Show Question
function showQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    questionText.textContent = q.question;

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option, index) {

        const label = document.createElement("label");

        label.innerHTML = `
            <input
                type="radio"
                name="answer"
                value="${index}"
            >
            ${option}
        `;

        optionsDiv.appendChild(label);
    });
}


// Next Button
nextBtn.addEventListener("click", function() {

    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {

        alert("Please select an answer!");

        return;
    }

    const selectedAnswer = Number(selected.value);

    if (selectedAnswer === questions[currentQuestion].answer) {

        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        quizPage.classList.add("hidden");
        resultPage.classList.remove("hidden");

        scoreText.textContent =
            "Your Score: " + score +
            " / " + questions.length;
    }
});


// Restart Quiz
restartBtn.addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;

    resultPage.classList.add("hidden");
    quizPage.classList.remove("hidden");

    showQuestion();
});


// Logout
logoutBtn.addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;

    resultPage.classList.add("hidden");
    login.classList.remove("hidden");
    loginForm.reset(); });