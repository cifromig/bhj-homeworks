let hasTooltip = document.getElementsByClassName("has-tooltip")
console.log (hasTooltip)

for (let i = 0; i< hasTooltip.length; i++ ){
    hasTooltip[i].addEventListener ("click", func);

            // let fff = hasTooltip[i].getAttribute("title") // textContent
                
            //   let ttt = getCoords (hasTooltip[i])

            //     function getCoords(elem) { // кроме IE8-
            //         let box = elem.getBoundingClientRect();
                
            //         return {
            //           top: box.top ,// + pageYOffset,
            //           left: box.left// + pageXOffset
            //         };
                
            //       }


            // hasTooltip[i].innerHTML += `
            // <div class="tooltip" style="left: ${ttt.left}; top: ${ttt.top}">
            //     ${fff}
            //   </div>
            //   `;


}

function func (event) {
    event.preventDefault() 
    let title = this.getAttribute("title")

    let Koordinaty = getCoords (this)

            function getCoords(elem) { 
                let box = elem.getBoundingClientRect();
                return {
                top:  box.top + window.pageXOffset + 20,// + pageYOffset,
                left: box.left + window.pageXOffset
                };
            }
let fff = typeof (this.children[0])
            console.log (fff)
    if (typeof (this.children[0])=="undefined") {
        this.innerHTML += `
        <div class="tooltip tooltip_active" style="left: ${Koordinaty.left}px; top:${Koordinaty.top}px">
            ${title} 
        </div>
        `;
    } else {

    //   for (let j = 0; j< hasTooltip.length; j++ ){
    //     hasTooltip[j].classList.remove ("tooltip_active")
    // }

        console.log( this.children[0].remove())
    }
            //   this.innerHTML += `
            //   <div class="tooltip" style="left: ${Koordinaty.left}px; top:${Koordinaty.top}px">
            //       ${title} 
            //   </div>
            //   `;



// ${ttt.left} ${ttt.top}
 // style="left: ${ttt.left}; top: ${ttt.top}">

/*

      if (this.children[0].classList.value.indexOf("tooltip_active") != -1){
        console.log (this.children[0].classList.remove ("tooltip_active"))
    } else{
        for (let j = 0; j< hasTooltip.length; j++ ){
            // hasTooltip[j].children[0].classList.remove ("tooltip_active")
            hasTooltip[j].classList.remove ("tooltip_active")
        }
       // console.log (this.children[0].getAttribute.stule.add ("right: 10; top: 10")
        console.log (this.children[0].classList.add ("tooltip_active"))
    }

*/


    //   for (let i = 0; i < this.children[0].classList.length; i++) {
    //     console.log (this.children[0].classList.value)
    //     if (this.children[0].classList.value.indexOf("tooltip_active") != -1){
    //         console.log (this.children[0].classList.remove ("tooltip_active"))
    //     } else{
    //         console.log (this.children[0].classList.add ("tooltip_active"))
    //     }
    //   }
    //   if (this.children[0].classList =="tooltip_active")
    //   console.log (this.children[0].classList.remove ("tooltip_active"))
    //   console.log (this.children[0].classList.add ("tooltip_active"))
    //   console.log (this.children[0].classList)
 }

