const dropdownItem = document.getElementsByClassName("dropdown__item")
const dropdownList = document.getElementsByClassName("dropdown")
const dropdownText = document.getElementById("text")

function funcDropdownList ()  {
    if(this.children.length >1) {
            if (this.children[1].classList[1] == undefined ) {
                this.children[1].classList.add ("dropdown__list_active")
            } 
            else {
                this.children[1].classList.remove ("dropdown__list_active")
            }
        }
}


for(let i=0; i< dropdownList.length; i++) {
    dropdownList[i].addEventListener("click", funcDropdownList);
}

for(let i=0; i< dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", funcDropdownItem);

}

      function funcDropdownItem (event)  {
         event.preventDefault() 
         event.stopPropagation(); 
         const link = event.currentTarget; 
            document.getElementById("text1").textContent = this.textContent
            // this.parentNode.textContent = this.textContent
            // console.log(dropdownItem[1].closest("text1"))
            this.parentNode.classList.remove ("dropdown__list_active")

    };