

let plaerViktori = 0;
let plaerStop = 0;
let getClickerElement = [];
// Убито кротов: <span id="dead">0</span><br>
// Промахов: <span id="lost">0</span><br>
getDeadElement = document.getElementById("dead")
getLostElement = document.getElementById("lost")

for (let i = 0; i < 9; i++) {
    getClickerElement[i] = document.getElementById("hole" + String(i+1));
    getClickerElement[i].onclick = function() {
        if (getClickerElement[i].className.includes("hole hole_has-mole")) {
            plaerViktori ++
            getDeadElement.textContent = plaerViktori
            if (plaerViktori > 9){
                setTimeout(() => {alert("Вы выйграли")
                plaerViktori = 0
                plaerStop = 0
                getDeadElement.textContent = 0
                getLostElement.textContent = 0})

            }
        }
        else {
            plaerStop ++
            getLostElement.textContent = plaerStop
            if (plaerStop > 4){
                setTimeout(() => {alert("Вы проиграли")
                plaerViktori = 0
                plaerStop = 0
                getDeadElement.textContent = 0
                getLostElement.textContent = 0})
            }
        }
    }
}
