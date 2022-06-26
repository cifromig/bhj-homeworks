let editor = document.getElementById("editor")
let text = editor
text.value = localStorage[text]
editor.addEventListener("keyup", fun)
function fun (){

   // localStorage[text] // Получение значения
    delete localStorage[text] // Удаление старого текста
    localStorage[text] = text.value //установка нового текста

    console.log (localStorage[text])
}
