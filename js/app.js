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
