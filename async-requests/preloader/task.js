
let valutaArr = []
let j=0

let xhr = new XMLHttpRequest( ); // экземпляр объекта XMLHttpRequest
xhr.open("GET", "https://netology-slow-rest.herokuapp.com", true); // создаём запрос
xhr.send(); 
xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE) {
    //console.log(xhr.responseText);
    const resultObject = JSON.parse(xhr.responseText);
        for(let keyr in resultObject.response.Valute){
            //console.log(resultObject.response.Valute[keyr].CharCode, resultObject.response.Valute[keyr].Value)
            valutaArr[j] ={CharCode: resultObject.response.Valute[keyr].CharCode, Value: resultObject.response.Valute[keyr].Value }
            j++
        }
    //console.log (valutaArr)

let items = document.querySelector("#items")
//console.log (items)

for(let i = 0; i < valutaArr.length; i++) {

    let itemValuta = document.createElement("div")

    let ddd = items.appendChild(itemValuta)
    
    itemValuta.innerHTML += `
    <div class="item">
        <div class="item__code">
             ${valutaArr[i].CharCode}
        </div>
        <div class="item__value">
            ${valutaArr[i].Value}
        </div>
        <div class="item__currency">
                руб.
        </div>
    </div>
    `;

}

//console.log (items)
let loader = document.querySelector("#loader")
loader.classList.remove("loader_active")

};
};
