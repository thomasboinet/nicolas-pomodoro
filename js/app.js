const startStopBtn = document.getElementById("start-pause-btn");
const pomodoroTimeDisplay = document.getElementById("pomodoro-display");
const resetBtn = document.getElementById("reset-btn");

startStopBtn.addEventListener("click", function toggleTimer() {
  if (pomodoroTimer !== null) {
    pauseTimer();
    startStopBtn.textContent = "Resume";
  } else {
    startTimer();
    startStopBtn.textContent = "Pause";
  }
});

resetBtn.addEventListener("click", () => {
  resetTimer();
  startStopBtn.textContent = "Start";
});

const themeImages = document.querySelectorAll(".theme-container img");
const backgroundLayer = document.getElementById("background-layer");

themeImages.forEach((img) => {
  img.addEventListener("click", () => {
    console.log("clicked on", img.dataset.theme);
    const matchedTheme = themes.find(function (theme) {
      return theme.name === img.dataset.theme;
    });
    console.log(matchedTheme);
    backgroundLayer.style.backgroundImage = `url("${matchedTheme.background}")`;
  });
});
