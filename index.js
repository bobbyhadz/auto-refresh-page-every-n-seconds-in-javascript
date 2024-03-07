console.log('bobbyhadz.com');

const refreshTimer = document.getElementById('refresh-timer');

let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;

  refreshTimer.innerHTML = `Refreshing page in 3 sec: ${timerInSeconds} seconds`;

  if (timerInSeconds >= 3) {
    window.location.reload();
  }
}, 1000);
