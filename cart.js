const header = document.querySelector("header");

window.addEventListener("scroll", function(){
      header.classList.toggle("sticky", window.scrollY > 80)
});

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
        body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
let products = [
    {
        id: 1,
        name: 'FRIED CHICKEN',
        image: '1.PNG',
        price: 15.00
    },
    {
        id: 2,
        name: 'FRIED RICE SHRIMP',
        image: '2.PNG',
        price: 25.00
    },
    {
        id: 3,
        name: 'ICED MUCHA',
        image: '3.PNG',
        price: 45.00
    },
    {
        id: 4,
        name: 'CHICKEN NUGGETS',
        image: '4.PNG',
        price: 50.00
    },
    {
        id: 5,
        name: 'FRENCH FRIES',
        image: '5.PNG',
        price: 40.00
    },
    {
        id: 6,
        name: 'SPICY CHICKEN',
        image: '6.PNG',
        price: 17.00
    },
    {
        id: 7,
        name: 'FRIED CHOP',
        image: '7.PNG',
        price: 130.00
    },
    {
        id: 8,
        name: 'FISH FRIED',
        image: '8.PNG',
        price: 60.00
    },
    {
        id: 9,
        name: 'BURGER CHICKEN',
        image: '9.PNG',
        price: 70.00
    },
    {
        id: 10,
        name: 'WHITE KRISPY',
        image: '10.PNG',
        price: 25.00
    },
    {
        id: 11,
        name: 'MOTIVATIONAL RICE',
        image: '11.PNG',
        price: 20.00
    },
    {
        id: 12,
        name: 'EGG WITH RICE ',
        image: '12.PNG',
        price: 30.00
    },
];
let listCards = [];
function initApp(){
     products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div  class="row">
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <p> beloved dish enjoyed around the world.</p>
            <div class="in-text">
            <div class="price">₱${value.price.toLocaleString()}.00</div>
            <div class="s-btnn">
            <button onclick="addToCard(${key})"> Add To Cart </button>
            </div>
            </div>
            <div class="top-icon">
          <a href="#"><i class='bx bx-heart'></i></a>
          </div>
        </div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
     reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice = totalPrice +  value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
             <div><img src="images/${value.image}"/></div>
             <div>${value.name}</div>
             <div>${value.price.toLocaleString()}</div>
              <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCard[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
