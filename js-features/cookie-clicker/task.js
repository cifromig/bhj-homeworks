
let clickerElement = document.getElementById("clicker__counter");
let cookieElement = document.getElementById("cookie");

cookieElement.onclick = function() {
    let cookies = clickerElement.textContent;
    cookies++;
    clickerElement.textContent = cookies;
    if ((cookies % 2) == 0 ) {
        cookieElement.width = 200
    }
    else {
        cookieElement.width = 300
    };
}


