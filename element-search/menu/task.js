let menuLinks = document.getElementsByClassName("menu__item")

for(let i=0; i< menuLinks.length; i++) {
     // menuLinks[i].addEventListener("mouseenter", showSub, false);
     // menuLinks[i].addEventListener("mouseleave", hideSub, false);
      menuLinks[i].addEventListener("click", func2);

    }

   function func2 ()  {
        //console.log (this)
    if(this.children.length >1) {
        this.children[1].classList.add ("menu_active")
        } 
    }

//  function showSub(e) {
//      // console.log (this)
//     if(this.children.length >1) {
//        this.children[1].classList.add ("menu_active")
//     } else {
//        return false;
//     }
//  }

//  function hideSub(e) {
//     // console.log (this)
//    if(this.children.length >1) {
//       //console.log( this.children[1].classList )
//       this.children[1].classList.remove ("menu_active")
//    } else {
//       return false;
//    }
// }
