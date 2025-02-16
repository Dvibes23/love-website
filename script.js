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

// Love Chat System with Local Storage (Cross-Browser Messaging)
function sendMessage() {
    const chatbox = document.getElementById("chatbox");
    const message = document.getElementById("chatInput").value.trim();
    
    if (message) {
        const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        messages.push({ sender: "You", text: message });
        localStorage.setItem("chatMessages", JSON.stringify(messages));
        updateChat();
        sendNotification("New Love Message ❤️", "Adunni sent you a new message!");
    }
}

function updateChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML = "";
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    
    messages.forEach(msg => {
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("chat-bubble");
        messageBubble.innerHTML = `<b>${msg.sender}:</b> ${msg.text}`;
        chatbox.appendChild(messageBubble);
    });
    chatbox.scrollTop = chatbox.scrollHeight;
}
setInterval(updateChat, 2000); // Auto-update chat every 2 seconds
updateChat();

function sendNotification(title, message) {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, { body: message, icon: "media/images/love_icon.png" });
    }
}
