// 1. Loadind Spinner
const loadingSpinner = document.getElementById("loadingSpinner");
loadingSpinner.classList.remove("hidden");

setTimeout(() => {
  loadingSpinner.classList.add("hidden");
}, 3000);

//2. Timer
let seconds = 0;
const timerDisplay = document.getElementById("timer");

function updateTimer() {
  timerDisplay.textContent = `Time: ${seconds} seconds`;
  seconds++;
}

setInterval(updateTimer, 1000);

//2. Animation
const movingElement = document.getElementById("movingElement");

function updateAnimation() {
  const currentLeft = parseFloat(getComputedStyle(movingElement).left);

  const newLeft = currentLeft + 5;

  movingElement.style.left = `${newLeft}px`;
}

setInterval(updateAnimation, 50);
