// Request Notification Permission
if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission !== "granted") {
            console.log("Notifications denied by user");
        }
    });
}

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
        document.getElementById("navMenu").style.display = "block";
        showPage("homePage");
    } else {
        document.getElementById("errorMsg").innerText = "Incorrect password! Try again.";
    }
}

// Page Navigation Handling
const pages = ["homePage", "chatPage", "lettersPage", "quizPage", "albumPage", "videosPage"];
function showPage(pageId) {
    pages.forEach(page => {
        document.getElementById(page).style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

// Countdown Timer Fix
function updateCountdown() {
    const firstDate = new Date("April 20, 2025 00:00:00").getTime();
    const birthday = new Date("May 19, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    
    let firstDateCountdown = firstDate - now;
    let birthdayCountdown = birthday - now;
    
    document.getElementById("countdown").innerHTML = `
        🎉 First Date: ${formatTime(firstDateCountdown)} left! <br>
        🎂 Adunni's Birthday: ${formatTime(birthdayCountdown)} left!
    `;
}
function formatTime(ms) {
    if (ms <= 0) return "🎉 Happening today! 🎉";
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Love Chat System with Notification
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
        
        sendNotification("New Love Message ❤️", "Adunni sent you a new message!");
    }
}

function sendNotification(title, message) {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, { body: message, icon: "media/images/love_icon.png" });
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
