let totalSeconds = 25 * 60;
let isBreak;
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
      switchMode();
    }
    pomodoroTimeDisplay.textContent = formatTime(totalSeconds);
    console.log(totalSeconds);
    totalSeconds -= 1;
  }, 1000);
}

function pauseTimer() {
  clearInterval(pomodoroTimer);
  pomodoroTimer = null;
}

function switchMode() {
  if (isBreak) {
    totalSeconds = 25 * 60;
    isBreak = false;
  } else {
    totalSeconds = 5 * 60;
    isBreak = true;
    console.log(totalSeconds);
  }
}
