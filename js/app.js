const startStopBtn = document.getElementById("start-pause-btn");
const pomodoroTimeDisplay = document.getElementById("pomodoro-display");

startStopBtn.addEventListener("click", function toggleTimer() {
  if (pomodoroTimer !== null) {
    pauseTimer();
    startStopBtn.textContent = "Resume";
  } else {
    startTimer();
    startStopBtn.textContent = "Pause";
  }
});
