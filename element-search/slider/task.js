
let sliderArrows = document.getElementsByClassName("slider__arrow")
let sliderItems = document.getElementsByClassName("slider__item")
let slideIndex = 0  // Индекс слайда
let slideIndexOld = 0  
let sliderItemsLength = sliderItems.length - 1 // количество слайдов

let sliderDot = document.getElementsByClassName("slider__dot")

for(let i=0; i< sliderArrows.length; i++) {
     sliderArrows[i].addEventListener("click", funcSliderArrows);
    }

for(let i=0; i< sliderDot.length; i++) {
    sliderDot[i].addEventListener("click", funcSliderDot);
    // slideIndexOld = slideIndex
    // slideIndex = i
    }

function funcSliderDot ()  {
    sliderItems[slideIndex].classList.remove ("slider__item_active")


            slideIndex ++
            if (slideIndex > sliderItemsLength) {slideIndex = 0 }
        //     slideIndex --
        //     if (slideIndex < 0) {slideIndex = sliderItemsLength}

        sliderItems[slideIndex].classList.add ("slider__item_active")
}


function funcSliderArrows ()  {
    sliderItems[slideIndex].classList.remove ("slider__item_active")
        if(this.innerHTML == "&lt;") {
            slideIndex ++
            if (slideIndex > sliderItemsLength) {slideIndex = 0 }
        } 
        if (this.innerHTML == "&gt;") {
            slideIndex --
            if (slideIndex < 0) {slideIndex = sliderItemsLength}
        }
    sliderItems[slideIndex].classList.add ("slider__item_active")
}



