/*'use strict';

//arrays to store the objects
Product.allProducts = [];
Product.lastDisplayed = [];
Product.totalClicks = 0;
Product.section = document.getElementById('product-section');
Product.resultsList = document.getElementById('results');

//function to make an object
function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  Product.allProducts.push(this);
}

//create product instances
new Product('bag', './img/bag.jpg', 'bag');
new Product('banana', './img/banana.jpg', 'banana');
new Product('bathroom', './img/bathroom.jpg', 'bathroom');
new Product('boots', './img/boots.jpg', 'boots');
new Product('breakfast', './img/breakfast.jpg', 'breakfast');
new Product('bubblegum', './img/bubblegum.jpg', 'bubblegum');
new Product('chair', './img/chair.jpg'), 'chair';
new Product('cthulhu', './img/cthulhu.jpg', 'cthulhu');
new Product('dog-duck', './img/dog-duck.jpg', 'dog-duck');
new Product('dragon', './img/dragon.jpg', 'dragon');
new Product('pen', './img/pen.jpg', 'pen');
new Product('pet-sweep', './img/pet-sweep.jpg', 'pet-sweep');
new Product('scissors', './img/scissors.jpg', 'scissors');
new Product('shark', './img/shark.jpg', 'shark');
new Product('sweep', './img/sweep.png', 'sweep');
new Product('tauntaun', './img/tauntaun.jpg', 'tauntaun');
new Product('unicorn', './img/unicorn.jpg', 'unicorn');
new Product('usb', './img/usb.gif', 'usb');
new Product('water-can', './img/water-can.jpg', 'water-can');
new Product('wine-glass', './img/wine-glass.jpg', 'wine-glass');

var imgElA = document.getElementById('product-picA');
var imgElB = document.getElementById('product-picB');
var imgElC = document.getElementById('product-picC');

//listener, something to be clicked

function randomProduct() {
  var randomIndexA = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexB = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexC = Math.floor(Math.random() * Product.allProducts.length);

 while(Product.lastDisplayed.includes(randomIndexA) || Product.lastDisplayed.includes(randomIndexB) || Product.lastDisplayed.includes(randomIndexC) || randomIndexA === randomIndexB || randomIndexB === randomIndexC) {

   randomIndexA = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexB = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexC = Math.floor(Math.random() * Product.allProducts.length);

   imgElA.src = Product.allProducts[randomIndexA].filepath;
    imgElA.alt = Product.allProducts[randomIndexA].altText;

   imgElB.src = Product.allProducts[randomIndexB].filepath;
    imgElB.alt = Product.allProducts[randomIndexB].altText;

   imgElC.src = Product.allProducts[randomIndexC].filepath;
    imgElC.alt = Product.allProducts[randomIndexC].altText;

   Product.allProducts[randomIndexA].timesDisplayed += +1;
    Product.allProducts[randomIndexB].timesDisplayed += +1;
    Product.allProducts[randomIndexC].timesDisplayed += +1;

   Product.lastDisplayed = [];
    Product.lastDisplayed.push(randomIndexA, randomIndexB, randomIndexC);
  }
}

function handleClick(e) {
  if(e.target.id === 'product-section') {
    return alert('You missed all of the pictures with your mouse-click! Please try again.');
  }




 // track number of total clicks
  Product.totalClicks += 1;

 for(var i = 0; i < Product.allProducts.length; i++) {
    if(e.target.alt === Product.allProducts[i].altText) {
      Product.allProducts[i].votes += 1;
    }
  }

 // what do we do when we hit 25 clicks
  if(Product.totalClicks > 24) {
    Product.section.removeEventListener('click', handleClick);
    showResults();
  }
}

randomProduct();

function showResults() {
  for(var i = 0; i < Product.allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.allProducts[i].name + ' has ' + Product.allProducts[i].votes + ' votes in ' + Product.allProducts[i].timesDisplayed + 'times displayed.';
    Product.resultsList.appendChild(liEl);
  }
}
//Add event listener
Product.section.addEventListener('click', handleClick);
*/




'use strict';

//arrays to store the objects
Product.allProducts = [];
Product.lastDisplayed = [];
Product.totalClicks = 0;
Product.section = document.getElementById('product-section');
Product.resultsList = document.getElementById('results');

//function to make an object
function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  Product.allProducts.push(this);
}

//create product instances
new Product('bag', 'img/bag.jpg', 'bag');
new Product('banana', 'img/banana.jpg', 'banana');
new Product('bathroom', 'img/bathroom.jpg', 'bathroom');
new Product('boots', 'img/boots.jpg', 'boots');
new Product('breakfast', 'img/breakfast.jpg', 'breakfast');
new Product('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
new Product('chair', 'img/chair.jpg'), 'chair';
new Product('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new Product('dog-duck', 'img/dog-duck.jpg', 'dogduck');
new Product('dragon', 'img/dragon.jpg', 'dragon');
new Product('pen', 'img/pen.jpg', 'pen');
new Product('pet-sweep', 'img/pet-sweep.jpg', 'petsweep');
new Product('scissors', 'img/scissors.jpg', 'scissors');
new Product('shark', 'img/shark.jpg', 'shark');
new Product('sweep', 'img/sweep.png', 'sweep');
new Product('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
new Product('unicorn', 'img/unicorn.jpg', 'unicorn');
new Product('usb', 'img/usb.gif', 'usb');
new Product('water-can', 'img/water-can.jpg', 'watercan');
new Product('wine-glass', 'img/wine-glass.jpg', 'wineglass');

var imgElA = document.getElementById('product-picA');
var imgElB = document.getElementById('product-picB');
var imgElC = document.getElementById('product-picC');

//listener, something to be clicked

function randomProduct() {
  var randomIndexA = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexB = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexC = Math.floor(Math.random() * Product.allProducts.length);

  while(Product.lastDisplayed.includes(randomIndexA) || Product.lastDisplayed.includes(randomIndexB) || Product.lastDisplayed.includes(randomIndexC) || randomIndexA === randomIndexB || randomIndexA === randomIndexC || randomIndexB === randomIndexC) {

    randomIndexA = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexB = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexC = Math.floor(Math.random() * Product.allProducts.length);
  }
  imgElA.src = Product.allProducts[randomIndexA].filepath;
  imgElA.alt = Product.allProducts[randomIndexA].altText;

  imgElB.src = Product.allProducts[randomIndexB].filepath;
  imgElB.alt = Product.allProducts[randomIndexB].altText;

  imgElC.src = Product.allProducts[randomIndexC].filepath;
  imgElC.alt = Product.allProducts[randomIndexC].altText;

  Product.allProducts[randomIndexA].timesDisplayed += 1;
  Product.allProducts[randomIndexB].timesDisplayed += 1;
  Product.allProducts[randomIndexC].timesDisplayed += 1;

  Product.lastDisplayed = [];
  Product.lastDisplayed.push(randomIndexA, randomIndexB, randomIndexC);
}

function handleClick(e) {
  if(e.target.id === 'product-section') {
    return alert('You missed all of the pictures with your mouse-click! Please try again.');
  }
  // track number of total clicks
  Product.totalClicks += 1;

  for(var i = 0; i < Product.allProducts.length; i++) {
    if(e.target.alt === Product.allProducts[i].altText) {
      Product.allProducts[i].votes += 1;
    }
  }

  // what do we do when we hit 25 clicks
  if(Product.totalClicks > 24) {
    Product.section.removeEventListener('click', handleClick);
    showResults();
  }
  randomProduct();
}

function showResults() {
  for(var i = 0; i < Product.allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.allProducts[i].name + ' has ' + Product.allProducts[i].votes + ' votes in ' + Product.allProducts[i].timesDisplayed + 'times displayed.';
    Product.resultsList.appendChild(liEl);
  }
}
//Add event listener
Product.section.addEventListener('click', handleClick);

randomProduct();
