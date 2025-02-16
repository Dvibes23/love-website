// Random Love Messages
const messages = [
    "Every moment with you is magical. I love you! ❤️",
    "You are my greatest blessing, my love. 💖",
    "No words can describe how much you mean to me. 😘",
    "You are the reason my world is so beautiful. 🌎❤️",
    "Loving you is the best thing that ever happened to me. 💞"
];

document.getElementById("loveLetter").innerText = messages[Math.floor(Math.random() * messages.length)];

// Countdown Timer
const countdownDate = new Date("2025-02-14").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerText = "Today is the day! 🎉❤️";
    }
}, 1000);

// Hidden Music Button
document.getElementById("hiddenButton").addEventListener("click", function() {
    const song = document.getElementById("loveSong");
    song.play();
    alert("This song is just for you, my love! 🎶💖");
});
