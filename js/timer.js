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
