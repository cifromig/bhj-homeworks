let VoprosArr = []
let j=0

let xhr = new XMLHttpRequest( ); // экземпляр объекта XMLHttpRequest
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php", true); // создаём запрос
xhr.send(); 
xhr.onreadystatechange = function () {
     if(xhr.readyState === xhr.DONE) {
console.log(JSON.parse(xhr.responseText));
    const resultObject = JSON.parse(xhr.responseText);
       //  for(let keyr in resultObject.data){
             //console.log(resultObject.data)
             VoprosArr[j] = {title: resultObject.data.title, answers: resultObject.data.answers};
            // j++
           //}
        console.log (VoprosArr)

        let pollAnswers = document.querySelector("#poll__answers");
        let pollTitle =  document.querySelector("#poll__title");

        let itemTitle = document.createElement("div")
        pollTitle.appendChild(itemTitle)
        itemTitle.innerHTML += `
        ${VoprosArr[0].title}
        `;

        console.log (pollAnswers)
        console.log (VoprosArr[0])


        for (let i=0; i < VoprosArr[0].answers.length ; i++){
         
            let itemVoprosi = document.createElement("div")
            let ddd = pollAnswers.appendChild(itemVoprosi)
 
            itemVoprosi.innerHTML += `
            <button class="poll__answer">
            ${VoprosArr[0].answers[i]}
            </button>
            `;

            itemVoprosi.addEventListener("click", fuhk)
            function fuhk(e){
                e.target
                alert ( "«Спасибо, ваш голос засчитан!»")
            }
    
        }
    //   <button class="poll__answer">
    //     Отлично
    //   </button>
    //   <button class="poll__answer">
    //     Я люблю собак
    //   </button>
    //   <button class="poll__answer">
    //     Кто тут?
    //   </button> 


// let items = document.querySelector("#items")
// //console.log (items)

// for(let i = 0; i < valutaArr.length; i++) {

//     let itemValuta = document.createElement("div")

//     let ddd = items.appendChild(itemValuta)
    
//     itemValuta.innerHTML += `
//     <div class="item">
//         <div class="item__code">
//              ${valutaArr[i].CharCode}
//         </div>
//         <div class="item__value">
//             ${valutaArr[i].Value}
//         </div>
//         <div class="item__currency">
//                 руб.
//         </div>
//     </div>
//     `;

// }

// //console.log (items)
// let loader = document.querySelector("#loader")
// loader.classList.remove("loader_active")

 };
};

// alert ( "«Спасибо, ваш голос засчитан!»")