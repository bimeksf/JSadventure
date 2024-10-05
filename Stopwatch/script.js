const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const displayTime = document.getElementById("display-time");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

start.addEventListener("click", function () {
  timer = true;
  stopwatch();
});

stop.addEventListener("click", function () {
  timer = false; // Zastaví časovač
});

reset.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;

  updateDisplay();
});

// Funkce pro stopky
function stopwatch() {
  if (timer === true) {
    count++;

    if (count == 100) { // 100 * 10 ms = 1 sekunda
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
    }

    updateDisplay(); // Aktualizuje zobrazení času

    setTimeout(stopwatch, 10); // Každých 10 ms
  }
}

// Funkce pro aktualizaci zobrazení času
function updateDisplay() {
  displayTime.textContent = `${formatTime(hour)}h : ${formatTime(minute)}m : ${formatTime(second)}s`;
}

// Pomocná funkce pro formátování času (přidá 0 před jednociferné čísla)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
