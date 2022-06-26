


let send = document.getElementById("signin__btn");
let welcome = document.getElementById("welcome");
let userId = document.getElementById("user_id");
let signinForm = document.getElementById("signin__form");

let request = new XMLHttpRequest(); // экземпляр объекта XMLHttpRequest

 delete localStorage["userid"]
let localStorageUserid = localStorage["userid"]


if (typeof localStorageUserid == "undefined") {

   send.addEventListener ("click", fuhkSend)

      function fuhkSend(e) {
          e.preventDefault()

      let formData = new FormData(signinForm)
      request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php"); 

        request.onreadystatechange = function () {
          if(this.readyState === request.DONE) {
            let responseTextReturn = JSON.parse(this.responseText) 

                if (responseTextReturn.success) {
                localStorage["userid"] = responseTextReturn.user_id //установка нового ID
                userId.textContent = responseTextReturn.user_id
                welcome.classList.add("welcome_active")
  //              console.log ("test",responseTextReturn)
              } else {
                  alert ("Неверно указан логин или пароль попробуйте ввести снова")
                  signinForm.reset()
                }
          }
        }    

        request.send(formData); 
    }    
} else {
  userId.textContent = localStorageUserid
  welcome.classList.add("welcome_active")
}


