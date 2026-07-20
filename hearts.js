const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  if (!heartsContainer) return; // Prevents errors if the container isn't found in the HTML

  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♥";

  const size = 14 + Math.random() * 18;
  const left = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  const drift = `${(Math.random() * 120 - 60).toFixed(0)}px`; // Added backticks

  heart.style.left = `${left}vw`; // Added backticks
  heart.style.fontSize = `${size}px`; // Added backticks
  heart.style.animationDuration = `${duration}s`; // Added backticks
  heart.style.setProperty("--drift", drift);

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Initial burst of 22 hearts
for (let i = 0; i < 22; i++) {
  setTimeout(createHeart, i * 180);
}

// Continuous flow of hearts
setInterval(createHeart, 220);