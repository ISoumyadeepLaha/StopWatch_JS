let [miliseconds, seconds, minutes, hours] = [0, 0, 0,0];
let timer = document.querySelector("#displayTimer");
let interval;

//implementing start function

document.getElementById("start").addEventListener("click", () => {
    interval = setInterval(() => {
    miliseconds = miliseconds + 10;
    if (miliseconds == 1000) {
      miliseconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
  }, 10);
});

//implementing pause function

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
});

//implementing reset function

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0,0];
    timer.innerHTML = " 00 : 00 : 00 : 000 ";
});
