// Password Protection
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "OlaMi&AdunniMi-Love") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        showPage("homePage");
    } else {
        document.getElementById("errorMsg").innerText = "Incorrect password! Try again.";
    }
}

// Surprise Popup
if (!localStorage.getItem("visited")) {
    document.getElementById("surprisePopup").style.display = "block";
    localStorage.setItem("visited", "true");
}
function closeSurprise() {
    document.getElementById("surprisePopup").style.display = "none";
}

// Page Navigation
function showPage(pageId) {
    const pages = ["homePage", "galleryPage", "videoPage", "liveSharePage"];
    pages.forEach(page => {
        document.getElementById(page).style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

// Countdown Timer
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

// Live Screen Sharing
function startScreenShare() {
    navigator.mediaDevices.getDisplayMedia({ video: true }).then(stream => {
        let videoElement = document.createElement("video");
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        document.getElementById("liveVideo").innerHTML = "";
        document.getElementById("liveVideo").appendChild(videoElement);
    }).catch(err => {
        alert("Screen sharing failed: " + err.message);
    });
}

// Live Voice Chat
let localStream;
let peerConnection;
const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

function startVoiceChat() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        localStream = stream;
        peerConnection = new RTCPeerConnection(config);
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
        peerConnection.ontrack = event => {
            let audioElement = document.createElement("audio");
            audioElement.srcObject = event.streams[0];
            audioElement.autoplay = true;
            document.getElementById("liveVideo").appendChild(audioElement);
        };
    }).catch(err => {
        alert("Voice chat failed: " + err.message);
    });
}
