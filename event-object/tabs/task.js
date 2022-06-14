

const vkladkaTab = document.getElementsByClassName("tab")
const vkladkaTabContent = document.getElementsByClassName("tab__content")
let vremynka = {}  // помогает отследить связь между меню и текстом

function funcVkladkaTab ()  {

    for(let i = 0; i < vkladkaTab.length; i++) 
        {vkladkaTab[i].classList.remove ("tab_active")
        vkladkaTabContent[i].classList.remove ("tab__content_active")}

    this.classList.add ("tab_active")
    key = this.textContent
    vkladkaTabContent[vremynka[key]].classList.add("tab__content_active")

}


for(let j=0; j< vkladkaTab.length; j++) {
    vremynka[vkladkaTab[j].textContent] = j
    // console.log (vkladkaTab[j].textContent)
    vkladkaTab[j].addEventListener("click", funcVkladkaTab);
}

for (var key in vremynka) {
    console.log(key + ' : '+ vremynka[key])
}
