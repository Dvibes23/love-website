// Password Protection
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "OlaMi&AdunniMi-Love") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("errorMsg").innerText = "Incorrect password! Try again.";
    }
}

// Love Countdown
const eventDate = new Date("2024-04-20").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " days left until our first date anniversary! 💖";
}, 1000);

// Love Chat
function sendMessage() {
    const chatbox = document.getElementById("chatbox");
    const message = document.getElementById("chatInput").value;
    if (message) {
        chatbox.innerHTML += `<p><b>You:</b> ${message}</p>`;
        document.getElementById("chatInput").value = "";
    }
}

// Love Letters
const letters = [
    "You make my world beautiful. I love you so much! ❤️",
    "Every moment with you is special. My heart belongs to you. 💖",
    "No matter where life takes us, my love for you will never change. 💞",
];

function revealLetter() {
    document.getElementById("loveLetter").innerText = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("loveLetter").style.display = "block";
}

// Love Quiz
const quizQuestions = [
    { question: "What was our first date location?", answer: "beach" },
    { question: "What is my favorite food?", answer: "pizza" },
];

const randomQuiz = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
document.getElementById("quizQuestion").innerText = randomQuiz.question;

function checkQuiz() {
    const answer = document.getElementById("quizInput").value.toLowerCase();
    if (answer === randomQuiz.answer) {
        document.getElementById("quizResult").innerText = "Correct! ❤️";
    } else {
        document.getElementById("quizResult").innerText = "Oops! Try again. 💔";
    }
}

// Play Love Song
function playSong() {
    document.getElementById("loveSong").play();
    alert("Enjoy our love song, my love! 🎶💖");
}
