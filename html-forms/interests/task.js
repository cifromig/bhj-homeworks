// let spiski = document.getElementsByClassName("interest__check")


// let spiski = document.getElementsByClassName("interest__check")
// let stertSpiski = document.getElementsByClassName("start")
let interest = document.getElementsByClassName("interest")

console.log (interest[0].children[0].children[0].checked)


for (let i =0 ; i < interest.length; i++){
    interest[i].children[0].addEventListener ("change", () => {

        if ( interest[i].children[0].textContent.trim() == "Домашние животные" || interest[i].children[0].textContent.trim() =="Еда") {
           console.log(interest[i].children[0].textContent.trim())
           let interestInsite = interest[i].querySelectorAll('.interest__check')
          // console.log(interestInsite)
           for (let i =0 ; i < interestInsite.length; i++){
            if (interestInsite[0].checked) {
                interestInsite[i].checked = true 
            } else {
            interestInsite[i].checked = false 
            }
           }
        } else {
            console.log (interest[i])
           let ddd = interest[i].closest(".interest")
           console.log (ddd) //.checked = false
        }

    })
    
}   
