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

// Countdown Timers
function updateCountdown() {
    const today = new Date().getTime();
    
    // First Date Anniversary (April 20)
    const firstDate = new Date("2024-04-20").getTime();
    const timeUntilFirstDate = firstDate - today;
    const daysFirstDate = Math.floor(timeUntilFirstDate / (1000 * 60 * 60 * 24));

    // Adunni's Birthday (May 19)
    const birthday = new Date("2024-05-19").getTime();
    const timeUntilBirthday = birthday - today;
    const daysBirthday = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));

    // Update Countdown Display
    document.getElementById("countdown").innerHTML = `
        🎉 First Date Anniversary: ${daysFirstDate} days left! 💖 <br>
        🎂 Adunni's Birthday: ${daysBirthday} days left! 🎁
    `;

    // If it's today
    if (timeUntilFirstDate < 0) {
        document.getElementById("countdown").innerHTML = "💖 Today is our First Date Anniversary! Let's celebrate! 🎉";
    }
    if (timeUntilBirthday < 0) {
        document.getElementById("countdown").innerHTML = "🎂 Happy Birthday, Adunni! I love you! 🎁💖";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown(); // Run Immediately

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

        // Auto-scroll to the latest message
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Secret Love Letters
const loveLetters = [
    "You are my everything, my heart, my soul. I love you more every day! ❤️",
    "Every second with you is a blessing. My love for you is endless. 💖",
    "You are the best thing that ever happened to me. Forever yours. 💞"
];

function revealLetter() {
    document.getElementById("loveLetter").innerText = loveLetters[Math.floor(Math.random() * loveLetters.length)];
    document.getElementById("loveLetter").style.display = "block";
}

// Updated Love Quiz Questions
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

// Play Love Song with Effects
function playSong() {
    const song = document.getElementById("loveSong");
    song.play();

    // Show message when song plays
    alert("Enjoy our special love song, my love! 🎶💖");

    // Floating hearts animation
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-animation");
    heartContainer.innerText = "💖💓💞";
    
    document.body.appendChild(heartContainer);

    // Remove hearts after animation
    setTimeout(() => {
        heartContainer.remove();
    }, 4000);
}

// Floating Hearts Animation (Continuously Generate Hearts)
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = "💖";
    
    document.body.appendChild(heart);
    
    // Random position
    heart.style.left = `${Math.random() * 100}vw`;

    // Remove hearts after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 1000);
