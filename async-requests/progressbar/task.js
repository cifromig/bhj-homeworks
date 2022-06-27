let send = document.getElementById("send")
let progress = document.getElementById("progress");
let fileElement = document.getElementById("file")



let request = new XMLHttpRequest(); // экземпляр объекта XMLHttpRequest

    send.addEventListener ("click", fuhkSend)

    function fuhkSend(e) {
        e.preventDefault()

        let form = document.getElementById("form");
         let formDataSend = new FormData(form);


        request.onreadystatechange = function () {
            if(this.readyState === request.DONE) {
                    alert ("Файл загружен")
            } 
            else {
                request.upload.onprogress = function(event) { 
                    console.log(event.loaded + "   "+ event.loaded/event.total + "   " +event.total);
                    progress.value = event.loaded/event.total
                }
            }
        }

        request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php"); 
        request.send(formDataSend); 

    }

