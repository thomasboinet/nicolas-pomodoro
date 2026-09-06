function startTimer() {
  let totalSeconds = 25 * 60;

  let start25MinuteCountdown = setInterval(function () {
    if (totalSeconds < 0) {
      clearInterval(start25MinuteCountdown);
      console.log("Take a break!");
    } else {
      console.log(totalSeconds);
    }
    totalSeconds -= 1;
  }, 1000);
}
