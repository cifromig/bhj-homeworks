

let timerStart = document.getElementById("timer");

function timerText() {
    let timer = timerStart.textContent;
    timer--;
    timerStart.textContent = timer;
    if (timer == 0) {
        clearInterval(timerIds);
        alert ("Вы победили в конкурсе!");
    }
}

const timerIds = setInterval(timerText, 1000);

