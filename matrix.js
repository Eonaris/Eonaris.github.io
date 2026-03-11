// MATRIX BACKGROUND SCRIPT

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to use
const letters = "01アイウカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Font size
const fontSize = 16;

// Number of columns
const columns = Math.floor(canvas.width / fontSize);

// Array of drops (one per column)
const drops = Array(columns).fill(1);

function draw() {

    // Slightly opaque black background for fade effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green letters
    ctx.fillStyle = "#00ff66"; // subtle green
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop occasionally
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Draw every 90ms (slower, subtle effect)
setInterval(draw, 90);

// Update canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
