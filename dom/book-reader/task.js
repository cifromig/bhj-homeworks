

const fontSize = document.getElementsByClassName("font-size") // считываем все элементы данного класса
const bookContent = document.getElementsByClassName("book__content")
const bookControl = document.getElementById("book__control")
// const vkladkaTabContent = document.getElementsByClassName("tab__content")
// let vremynka = {}  // помогает отследить связь между меню и текстом

function funcfontSize (event)  {
        event.preventDefault() 

    for(let i = 0; i < fontSize.length; i++) 
           {fontSize[i].classList.remove ("font-size_active")
        }
        this.classList.add ("font-size_active")
        let ddd = this.getAttribute("data-size")
        console.log (ddd)

        // if (fontSize[i].DataS){

        //console.log (bookControl.children[1].getAttribute("data-size")) //book__control.getAttribute("data-size"))

            if (ddd == "big"){
                bookContent[0].classList.add("book_fs-big") }
            else if (ddd == "small"){
                bookContent[0].classList.add("book_fs-small") }
            else {
                bookContent[0].classList.remove("book_fs-small")
                bookContent[0].classList.remove("book_fs-big")
            }
            
    }
//     key = this.textContent
//     vkladkaTabContent[vremynka[key]].classList.add("tab__content_active")



for(let j=0; j< fontSize.length; j++) {
    // vremynka[vkladkaTab[j].textContent] = j
    // console.log (vkladkaTab[j].textContent)

    fontSize[j].addEventListener("click", funcfontSize);
}

// for (let key in vremynka) {
//     console.log(key + ' : '+ vremynka[key])
// }