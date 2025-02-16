// Surprise Popup (First Visit Only)
if (!localStorage.getItem("visited")) {
    document.getElementById("surprisePopup").style.display = "block";
    localStorage.setItem("visited", "true");
}
function closeSurprise() {
    document.getElementById("surprisePopup").style.display = "none";
}

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

// Countdown Timer
function updateCountdown() {
    const firstDate = new Date("2024-04-20T18:00:00").getTime();
    const birthday = new Date("2024-05-19T00:00:00").getTime();
    const now = new Date().getTime();
    
    const firstDateCountdown = Math.max(0, firstDate - now);
    const birthdayCountdown = Math.max(0, birthday - now);
    
    document.getElementById("countdown").innerHTML = `
        🎉 First Date: ${formatTime(firstDateCountdown)} left! <br>
        🎂 Adunni's Birthday: ${formatTime(birthdayCountdown)} left!
    `;
}

function formatTime(ms) {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Love Chat System
function sendMessage() {
    const chatbox = document.getElementById("chatbox");
    const message = document.getElementById("chatInput").value.trim();
    
    if (message) {
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("chat-bubble");
        messageBubble.innerHTML = `<b>You:</b> ${message}`;
        
        chatbox.appendChild(messageBubble);
        document.getElementById("chatInput").value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Love Letters
const loveLetters = [
    "You are my everything, my heart, my soul. I love you more every day! ❤️",
    "Every second with you is a blessing. My love for you is endless. 💖",
    "You are the best thing that ever happened to me. Forever yours. 💞"
];

function revealLetter() {
    document.getElementById("loveLetter").innerText = loveLetters[Math.floor(Math.random() * loveLetters.length)];
    document.getElementById("loveLetter").style.display = "block";
}

// Love Quiz
const quizQuestions = [
    { question: "What nickname do I call you the most?", answer: "baby" },
    { question: "What’s something we both love to do together?", answer: "watch movies" },
    { question: "What food do we both love?", answer: "pizza" }
];

const selectedQuiz = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
document.getElementById("quizQuestion").innerText = selectedQuiz.question;

function checkQuiz() {
    const answer = document.getElementById("quizInput").value.trim().toLowerCase();
    
    if (answer === selectedQuiz.answer) {
        document.getElementById("quizResult").innerText = "Correct! ❤️";
    } else {
        document.getElementById("quizResult").innerText = "Oops! Try again. 💔";
    }
}

// Floating Hearts Animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = "💖";
    heart.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 800);
