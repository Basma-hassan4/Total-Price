let openShopping = document.querySelector('.shop');
let closeShopping = document.querySelector('.close');
let body = document.querySelector('body');
let initialvalue = document.querySelector('.initialvalue');
let value = document.querySelector('.value');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

////////////////////////////////////////////////////////////
var allProducts = document.querySelectorAll(".my-product .product");
var content = document.querySelector("#my-all");
var btn = document.querySelector("#initialvalue");
var totalPrice = 0;

allProducts.forEach(function (item){
    item.onclick = function (){
       totalPrice += +(item.getAttribute("price"));
       let cardTitle = item.querySelector(".card-title").textContent;
       let cardText = item.querySelector(".card-text").textContent;
       content.innerHTML += '<p style="color:#000">' + cardTitle + ' - ' + cardText + '</p>';
       let quantitySpan = document.querySelector(".value");
       let currentQuantity = parseInt(quantitySpan.textContent);
       quantitySpan.textContent = currentQuantity + 1;
    }
});

btn.onclick = function() {
    document.getElementById("initialvalue").innerHTML = "Total: $ " + totalPrice.toFixed(2);
};