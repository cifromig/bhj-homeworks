let subscribeModal = document.getElementById ("subscribe-modal")
let modalClose = document.querySelector(".modal__close")
let prosmotrSubscribeModal = localStorage["prosmotrSubscribeModal"]

// if (typeof document.querySelector(".modal__close") === "undefined" ) {

if (typeof prosmotrSubscribeModal === "undefined") {
subscribeModal.classList.add ("modal_active")
modalClose.addEventListener ("click", fun)
    function fun () {
        localStorage["prosmotrSubscribeModal"] = "yes"
        subscribeModal.classList.remove ("modal_active")
        }   
    }
// }
// delete localStorage["prosmotrSubscribeModal"]
