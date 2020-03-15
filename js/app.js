'use strict';

var stuffImages = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
];

var allProducts = [];
var itemCart = [];
var itemQuantity =[];


var selectEl = document.getElementById('items');
var tableEl = document.getElementById('cart');
var eventos = document.getElementById('catalog');


var Product = function(name) {
    this.name = name.split(".")[0];
    this.urlImage =`images/${name}`;
    allProducts.push(this);
};

for (var i=0 ; i<stuffImages.length ; i++) {
    new Product(stuffImages[i]);
    }


function setItem2(){
    var qnty = JSON.stringify(itemQuantity);
    localStorage.setItem('itemQuantity', qnty);
    var order = JSON.stringify(itemCart);
    localStorage.setItem('itemCart', order);
    }
    
function getItem2(){
    var orderQnty = localStorage.getItem('itemQuantity');
    if(orderQnty){
    itemQuantity = JSON.parse(orderQnty);
    }
    var orderItem = localStorage.getItem('itemCart');
    if(orderItem){
    itemCart = JSON.parse(orderItem);
    }
}
