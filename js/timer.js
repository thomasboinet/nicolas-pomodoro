let totalSeconds = 25 * 60;
let pomodoroTimer = null;

// format totalSeconds into MM:SS -->

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return String(`${paddedMinutes}:${paddedSeconds}`);
}

function startTimer() {
  if (pomodoroTimer) clearInterval(pomodoroTimer);

  pomodoroTimer = setInterval(function () {
    if (totalSeconds < 0) {
      clearInterval(pomodoroTimer);
    } else {
      console.log(totalSeconds);
      pomodoroTimeDisplay.textContent = formatTime(totalSeconds);
    }
    totalSeconds -= 1;
  }, 1000);
}

function pauseTimer() {
  clearInterval(pomodoroTimer);
  pomodoroTimer = null;
}
