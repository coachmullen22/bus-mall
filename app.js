'use strict'

//array to store the objects
Product.allProducts = [];
Product.lastDisplayed = [];
Product.totalClicks = 0;

//function to make an object
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;
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
new Product('dog-duck', './img/dog-duck.jpg');
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

var imgEl1 = document.getElementById('product-pic1');
var imgEl2 = document.getElementById('product-pic2');
var imgEl3 = document.getElementById('product-pic3');

//listener, something to be clicked
imgEl1.addEventListener('click', randomProduct);
imgEl2.addEventListener('click', randomProduct);
imgEl3.addEventListener('click', randomProduct);

function randomProduct() {
  // var randomNum = [];
    var randomIndex1 = Math.floor(Math.random() * Product.allProducts.length)
    imgEl1.src = Product.allProducts[randomIndex1].filepath;
    imgEl1.id = Product.allProducts[randomIndex1].name;
    var randomIndex2 = Math.floor(Math.random() * Product.allProducts.length)
    imgEl2.src = Product.allProducts[randomIndex2].filepath;
    imgEl2.id = Product.allProducts[randomIndex2].name;
    var randomIndex3 = Math.floor(Math.random() * Product.allProducts.length)
    imgEl3.src = Product.allProducts[randomIndex3].filepath;
    imgEl3.id = Product.allProducts[randomIndex3].name;



    console.log(randomIndex1);
    console.log(randomIndex2);
    console.log(randomIndex3);
}

function handleClick(e) {
  // if(e.target.id === Product.section.................)
  // track number of total clicks
  Product.totalClicks += 1;

  // what do we do when we hit 25 clicks
  if(Product.totalClicks > 25) {
    Product.section.removeEventListener('click', handleClick);
    showResults();
  }

  // count votes for each image
// for(var i = 0; i < Product.allProducts.length; i++) {
//   if(event.target..................)
}
console.log('e.target', e.target);

  // call randomProduct funtion again
randomProduct();
}
//Add event listener
Product.section.addEventListener('click', handleClick);

//render three images on page load
randomProduct();
