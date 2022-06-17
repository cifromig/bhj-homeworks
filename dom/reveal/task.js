
let thisElementS = document.getElementsByClassName("reveal")


window.onscroll = function() {
    // console.log (thisElements1[0])
    // console.log (thisElements)

for (let i = 0; i < thisElementS.length; i++){
    let thisElement = thisElementS[i]
        if (isVisible (thisElement)) {
            console.log ( isVisible (thisElement))
            thisElement.classList.add ("reveal_active")
        }
        else {
            thisElement.classList.remove ("reveal_active")
        }
    }
  }

  function isVisible (el) {
    let { top, bottom } = el.getBoundingClientRect()
    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
  }

