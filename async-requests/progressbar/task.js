let send = document.getElementById("send")
const progress = document.getElementById( 'progress' );
let file = document.getElementById("file")

let form = document.getElementById("form");

let request = new XMLHttpRequest(); // экземпляр объекта XMLHttpRequest

    send.addEventListener ("click", fuhkSend)

    function fuhkSend(e) {
        e.preventDefault()
  
    let formData = new FormData(form)
    request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php"); 

      request.onreadystatechange = function () {
        if(this.readyState === request.DONE) {
                // progress.value = 1
                // clearInterval(timerId)
                alert ("Файл загружен")
        } else {
            // console.log (request.readyState)
            progress.value = progress.value + 0.001  // сделано просто как заглушка для показа что идет прогрессбар
            
            request.upload.onprogress = function(event) { 
                console.log(event.loaded + ' / ' + event.total); // почему то данный кусочек кода у меня не работает
              }
        }
    }
    request.send(formData); 

}

