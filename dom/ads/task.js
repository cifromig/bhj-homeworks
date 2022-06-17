// let rotatorSet = document.getElementById("www")
let rotatorSet = document.getElementsByClassName("rotator")[0]
let z = 0
let wremy = 1000 // Время задержки между показами
// let colors = ""

function funRotatorSet () {

        rotatorSet.children[z].classList.remove ("rotator__case_active")
        z++
        if ((rotatorSet.children.length-1) < z) { 
            z = 0 }
        // console.log (i)
        wremy = rotatorSet.children[z].getAttribute("data-speed")
        let colors = rotatorSet.children[z].getAttribute("data-color")
        rotatorSet.children[z].style.color = colors;

        rotatorSet.children[z].classList.add ("rotator__case_active")

    }


async function task(i) { 
    await timer(wremy);
    funRotatorSet();
  }
  
  async function main() {
    for(let i = 0; i < 100; i+= 10) {
      for(let j = 0; j < 10; j++) { 
        if(j % 2) { 
          await task(i + j);
        }
      }
    }
  }
      
  main();
  
  function timer(ms) { return new Promise(res => setTimeout(res, ms)); }