// Matrix rain effect with binary (0s and 1s)
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to display (binary)
const binary = '01';

// Convert to array
const characters = binary.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = [];

// Initialize drops
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100;
}

// Drawing the characters
function draw() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff0055';
    ctx.font = fontSize + 'px monospace';

    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Send the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment Y coordinate
        drops[i]++;
    }
}

// Animation loop
setInterval(draw, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add glitch effect to logo on hover
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', function() {
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            this.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 10px #ff0055,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px #ff0055
            `;
            glitchCount++;
            if (glitchCount > 5) {
                clearInterval(glitchInterval);
                this.style.textShadow = '0 0 10px #ff0055, 0 0 20px #ff0055';
            }
        }, 50);
    });
}
