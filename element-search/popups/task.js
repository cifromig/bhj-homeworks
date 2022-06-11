let modalMain = document.getElementById("modal_main")/// .classList
let modalSuccess = document.getElementById("modal_success")
let modalCloseTimes1 = document.getElementById("modal__close_times1")
let modalCloseTimes2 = document.getElementById("modal__close_times2")
let showSuccess = document.getElementById("show-success1")

modalMain.classList.add("modal_active")

modalCloseTimes1.onclick = function() {
    modalMain.classList.remove("modal_active")
}
showSuccess.onclick = function() {
    modalSuccess.classList.add("modal_active")
    modalMain.classList.remove("modal_active")
    // modalMain.classList.remove("modal_active")
}

console.log (modalSuccess)
modalCloseTimes2.onclick = function() {
    modalSuccess.classList.remove("modal_active")
}
