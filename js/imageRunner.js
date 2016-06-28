'use strict';
// this js file holds the image rotation and chart display scripts

//Global variables.  I gave up on the global helper object, maybe later
var numRuns = 0;
var constructedImages = [];
var thisRunRandoms = [21, 21, 21];
var lastRunRandoms = [];

var img_one = document.getElementById('img_one');
var img_two = document.getElementById('img_two');
var img_three = document.getElementById('img_three');
var img_container = document.getElementById('img_container');
var chart_here = document.getElementById('chart_here');
var chart_button = document.getElementById('chart_button');

var chartLabels = [];
var chartData = [];

  // constructor function for image objects
function ImageConstructor(imageName, imagePath, timesShown, clicks) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.timesShown = timesShown;
  this.clicks = clicks;
  constructedImages.push(this);
};

//create image objects here by calling constructor
new ImageConstructor('bag', 'images/bag.png', 0, 0);
new ImageConstructor('banana', 'images/banana.png', 0, 0);
new ImageConstructor('bathroom', 'images/bathroom.png', 0, 0);
new ImageConstructor('boots', 'images/boots.png', 0, 0);
new ImageConstructor('breakfast', 'images/breakfast.png', 0, 0);
new ImageConstructor('bubblegum', 'images/bubblegum.png', 0, 0);
new ImageConstructor('chair', 'images/chair.png', 0, 0);
new ImageConstructor('cthulhu', 'images/cthulhu.png', 0, 0);
new ImageConstructor('dog-duck', 'images/dog-duck.png', 0, 0);
new ImageConstructor('dragon', 'images/dragon.png', 0, 0);
new ImageConstructor('pen', 'images/pen.png', 0, 0);
new ImageConstructor('pet-sweep', 'images/pet-sweep.png', 0, 0);
new ImageConstructor('scissors', 'images/scissors.png', 0, 0);
new ImageConstructor('shark', 'images/shark.png', 0, 0);
new ImageConstructor('sweep', 'images/sweep.png', 0, 0);
new ImageConstructor('tauntaun', 'images/tauntaun.png', 0, 0);
new ImageConstructor('unicorn', 'images/unicorn.png', 0, 0);
new ImageConstructor('usb', 'images/usb.png', 0, 0);
new ImageConstructor('water-can', 'images/water-can.png', 0, 0);
new ImageConstructor('wine-glass', 'images/wine-glass.png', 0, 0);

var generateRandomNumber = function() {
  return Math.floor(Math.random() * (constructedImages.length));
};

var genThreeRandoms = function() {
  var rolls = 0;
  lastRunRandoms = thisRunRandoms;
  thisRunRandoms = [];
  while(rolls < 3) {
    var notDuplicate = true;
    var newRoll = generateRandomNumber();
    for(var m = 0; m < 3; m++) {
      if(thisRunRandoms[m] === newRoll) {
        notDuplicate = false;
        break;
      }
      else if(lastRunRandoms[m] === newRoll) {
        notDuplicate = false;
        break;
      }
    }
    if(notDuplicate) {
      rolls++;
      thisRunRandoms.push(newRoll);
    }
  }
};

function displayImages() {
  img_one.src = constructedImages[thisRunRandoms[0]].imagePath;
  constructedImages[thisRunRandoms[0]].timesShown++;
  img_two.src = constructedImages[thisRunRandoms[1]].imagePath;
  constructedImages[thisRunRandoms[1]].timesShown++;
  img_three.src = constructedImages[thisRunRandoms[2]].imagePath;
  constructedImages[thisRunRandoms[2]].timesShown++;
}

function countClicks(localClickHolder) {
  var splitOne = localClickHolder.split('images/')[1];
  var splitTwo = splitOne.split('.')[0];
  for(var i = 0; i < constructedImages.length; i++) {
    if(splitTwo === constructedImages[i].imageName) {
      constructedImages[i].clicks++;
    }
  }
}

//this makes the chart vars for the drawChart function below

function makeChartData() {
  for(var i = 0; i < constructedImages.length; i++) {
    chartData[i] = constructedImages[i].clicks;
    chartLabels[i] = constructedImages[i].imageName;
  }
}

var chartDataObject = {
  labels: chartLabels,
  datasets: [
    {
      data: chartData
    }
  ]
};

function drawChart() {
  makeChartData();
  var ctx = chart_here.getContext('2d');
  var itemChart = new Chart(ctx, {
    type: 'bar',
    data: chartDataObject,
    options: {
      responsive: false
    },
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true,
    //     }
    //   }]
    // }
  });
}

// function hideChart() {
//   document.getElementById('funky-chart').hidden = true;
// }

function doChartButtonStuff(event) {
  chart_here.style.display = 'block';
  drawChart();
}

function doContainerStuff(event) {
  numRuns++;
  genThreeRandoms();
  displayImages();
  if(event.target.src) {
    countClicks(event.target.src);
  }
  if(numRuns > 2) {
    img_container.removeEventListener('click', doContainerStuff);
    document.getElementById('chart_button').style.display = 'block';
  }
};

img_container.addEventListener('click', doContainerStuff);
chart_button.addEventListener('click', doChartButtonStuff);

//call functions here
genThreeRandoms();
displayImages();
