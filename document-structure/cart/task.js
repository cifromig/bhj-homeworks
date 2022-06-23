let productAdd = document.getElementsByClassName("product__add")

let productQuantityControls = document.getElementsByClassName("product__quantity-controls")


for (let i = 0; i< productQuantityControls.length; i++){
    productQuantityControls[i].children[2].addEventListener("click", funProductPlus)
    productQuantityControls[i].children[0].addEventListener("click", funProductMinus)


function funProductPlus(event) {
    // event.preventDefault() 
    let count = Number(productQuantityControls[i].children[1].textContent.trim())
    console.log ("+")
  //  console.log (count)
    productQuantityControls[i].children[1].textContent = (count + 1)
    console.log (productQuantityControls[i].children[1].textContent)
}

function funProductMinus() {
    let count = Number(productQuantityControls[i].children[1].textContent.trim())
    console.log ("-")
  //  console.log (count)
  if (count > 1){
    productQuantityControls[i].children[1].textContent = (count - 1)
    console.log (productQuantityControls[i].children[1].textContent)
  }
}
}

for (let i = 0; i< productAdd.length; i++){
    productAdd[i].addEventListener("click", funAdd)

    function funAdd () {
         console.log ("Добавление в корзину")


                  let divProduct = document.createElement("div")
                  let product = productAdd[i].closest(".product")
                  let dataIdProduct = product.getAttribute("data-id")
                  let src = product.children[1].getAttribute("src")
                  let ddd = "basket"+ dataIdProduct
                  let dataIdBasket = document.getElementById(ddd)
                  let count = Number(productQuantityControls[i].children[1].textContent)

                  if(dataIdBasket == null){

                  divProduct .innerHTML += `
                  <div class="cart__product" id = ${ddd}>
                    <a href="#" class="task__remove">&times;</a>
                    <img class="cart__product-image" src=${src} >
                    <div class="cart__product-count">${count}</div>
                  </div>
                  `;
                  let sss = document.querySelector(".cart__products")
                  sss.appendChild (divProduct)
                  console.log (divProduct.children[0].children[0])
                  divProduct.children[0].children[0].addEventListener ("click", funRemove => {
                     funRemove.target.closest(".cart__product").remove()
                   })

                } else {
                  dataIdBasket.children[2].textContent = Number(dataIdBasket.children[2].textContent) + count
                }
         
    }
}