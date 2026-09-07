let totalSeconds = 25 * 60;
let pomodoroTimer = null;

function startTimer() {
  if (pomodoroTimer) clearInterval(pomodoroTimer);

  pomodoroTimer = setInterval(function () {
    if (totalSeconds < 0) {
      clearInterval(pomodoroTimer);
      //   console.log("Take a break!");
    } else {
      console.log(totalSeconds);
    }
    totalSeconds -= 1;
  }, 1000);
}

function pauseTimer() {
  clearInterval(pomodoroTimer);
  pomodoroTimer = null;
}

// format totalSeconds into MM:SS -->

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedMiniutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
}
