let menuLinks = document.getElementsByClassName("menu__item")

function func2 (event)  {

      // event.stopPropagation()
      // const link = event.currentTarget; 
   //console.log (this)
if(this.children.length >1) {
   event.preventDefault() 
   this.children[1].classList.toggle("menu_active")
   } 
}


for(let i=0; i< menuLinks.length; i++) {
     // menuLinks[i].addEventListener("mouseenter", showSub, false);
     // menuLinks[i].addEventListener("mouseleave", hideSub, false);
      
   //   menuLinks[i].onclick = func2 //("click", func2);
     
    menuLinks[i].addEventListener("click", func2);
      // menuLinks[i].onclick = func2 () {
      //    if(this.children.length >1) {
      //       this.children[1].classList.add ("menu_active")
      //       } 
      // };
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
