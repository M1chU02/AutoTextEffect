const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const phraseBtn = document.getElementById("phraseBtn");
const resetBtn = document.getElementById("resetBtn");
const phraseInput = document.getElementById("phrase");
let idx = 0;
let speed = 300 / speedEl.value;
let intervalId = null;

phraseBtn.addEventListener("click", startEffect);
resetBtn.addEventListener("click", resetEffect);

function startEffect() {
  if (intervalId) return; // Prevent multiple starts

  const text = phraseInput.value || "Auto text effect.";
  idx = 0;
  phraseBtn.disabled = true;
  writeText(text);
}

function writeText(text) {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx <= text.length) {
    intervalId = setTimeout(() => writeText(text), speed);
  } else {
    phraseBtn.disabled = false;
    intervalId = null;
  }
}

function resetEffect() {
  clearTimeout(intervalId);
  intervalId = null;
  idx = 0;
  textEl.innerText = "";
  phraseBtn.disabled = false;
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
  if (intervalId) {
    clearTimeout(intervalId);
    writeText(phraseInput.value || "Auto text effect.");
  }
});
