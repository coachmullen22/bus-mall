'use strict';

//arrays to store the objects
Product.allProducts = [];
Product.lastDisplayed = [];
Product.totalClicks = 0;
Product.section = document.getElementById('product-section');
Product.resultsList = document.getElementById('results');
Product.showResults = []

//function to make an object
function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.viewed = 0;
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
new Product('petsweep', 'img/pet-sweep.jpg', 'petsweep');
new Product('scissors', 'img/scissors.jpg', 'scissors');
new Product('shark', 'img/shark.jpg', 'shark');
new Product('sweep', 'img/sweep.png', 'sweep');
new Product('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
new Product('unicorn', 'img/unicorn.jpg', 'unicorn');
new Product('usb', 'img/usb.gif', 'usb');
new Product('watercan', 'img/water-can.jpg', 'watercan');
new Product('wineglass', 'img/wine-glass.jpg', 'wineglass');

var imgElA = document.getElementById('product-picA');
var imgElB = document.getElementById('product-picB');
var imgElC = document.getElementById('product-picC');

//listener, something to be clicked

function randomProduct() {
  var randomIndexA = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexB = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexC = Math.floor(Math.random() * Product.allProducts.length);

  while(Product.lastDisplayed.includes(randomIndexA) || Product.lastDisplayed.includes(randomIndexB) || Product.lastDisplayed.includes(randomIndexC) || randomIndexB === randomIndexA || randomIndexC === randomIndexA || randomIndexC === randomIndexB) {

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

  Product.allProducts[randomIndexA].viewed += 1;
  Product.allProducts[randomIndexB].viewed += 1;
  Product.allProducts[randomIndexC].viewed += 1;

  Product.lastDisplayed = [];
  Product.lastDisplayed.push(randomIndexA, randomIndexB, randomIndexC);
}

function handleClick(e) {
  if(e.target.id === 'product-section') {
    return alert('You missed all of the pictures with your mouse-click! Please try again.');
  }
  // track number of total clicks
  Product.totalClicks += 1;
console.log('line 83', Product.totalClicks);

  for(var i = 0; i < Product.allProducts.length; i++) {
    if(e.target.alt === Product.allProducts[i].altText) {
      Product.allProducts[i].votes += 1;
    }
  }

  // what do we do when we hit 25 clicks
  if(Product.totalClicks > 9) {
console.log('wtf');
    Product.section.removeEventListener('click', handleClick);
    // showResults();
  }
  randomProduct();
}

var tableNames = [];
var tableVotes = [];
var tableViews = [];

function showResults() {
  for(var i = 0; i < Product.allProducts.length; i++) {
    tableNames.push(Product.allProducts[i].name);
    tableVotes.push(Product.allProducts[i].votes);
    tableViews.push(Product.allProducts[i].viewed);
  }
  console.log(tableViews, tableVotes, tableNames);
}
    // Product.showResultNames.push(tableNames);
    // Product.showResultVotes.push(tableVotes);
    // Product.showResultViews.push(tableViews);
    // var liEl = document.createElement('li');
    // liEl.textContent = Product.allProducts[i].name + ' was selected ' + Product.allProducts[i].votes + ' times out of ' + Product.allProducts[i].viewed + ' times displayed.';
    // Product.resultsList.appendChild(liEl);
showResults();

// console.log(Product.showResultNames);
// console.log(Product.showResultVotes);
// console.log(Product.showResultViews);
//Add event listener
Product.section.addEventListener('click', handleClick);

randomProduct();

//Format Table Results
var ctx = document.getElementById("canvas");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: tableNames,
        datasets: [{
            label: '# of Votes',
            data: tableVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
