let buttom = document.getElementById("tasks__add")
let input = document.getElementById("task__input")
let tasksList = document.getElementById("tasks__list")

buttom.addEventListener ("click", fun)

function fun (e) {
    e.preventDefault() 


    if (input.value.trim() != ""){
      
      let divTask = document.createElement("div")

      divTask.innerHTML += `
      <div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
      `;
      tasksList.appendChild (divTask)

      // let remoweTask = divTask.querySelector(".task__remove")

      // remoweTask.addEventListener ("click", (funk) => {
      //   funk.target.closest(".task").remove()
      // })

      let remoweTaskN = document.getElementsByClassName("task__remove")
        for (let i =0; i < remoweTaskN.length; i++ ) {
        remoweTaskN[i].addEventListener ("click", funs)
    
      function funs () {
         this.closest(".task").remove()
      }
}
    
    }  else {
      alert ("для добавления задачи необходимо что то написать в поле ввода")
    }


}


  