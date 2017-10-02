'use strict'

//array to store the objects
Product.allProducts = [];

//function to make an object
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Product.allProducts.push(this);
}

//create product instances
new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dug-duck', './img/dug-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', './img/pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.png');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('usb', './img/usb.gif');
new Product('water-can', './img/water-can.jpg');
new Product('water-glass', './img/wine-glass.jpg');

//listener, something to be clicked
var imgEl = document.getElementById('product-pic');

imgEl.addEventListener('click', randomProduct);

// randonly display three pictures
function randomProduct() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length)
console.log(randomIndex);
  imgEl.src = Product.allProducts[randomIndex].filepath;
}

randomProduct();
