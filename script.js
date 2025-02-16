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

// Love Countdown Timer
const eventDate = new Date("2024-04-20").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    if (distance < 0) {
        document.getElementById("countdown").innerText = "Today is our special day! 🎉❤️";
    } else {
        document.getElementById("countdown").innerText = `${days} days left until our first date anniversary! 💖`;
    }
}, 1000);

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

// Love Quiz System
const quizQuestions = [
    { question: "What was our first date location?", answer: "beach" },
    { question: "What is my favorite food?", answer: "pizza" },
    { question: "What color do I love the most?", answer: "red" }
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
