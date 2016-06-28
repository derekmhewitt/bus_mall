'use strict';

// this js file holds the image rotation script, every activation is called a run

//Global variables.  I gave up on the global helper object, maybe later
var numRuns = 0;
var constructedImages = [];
var thisRunRandoms = [21, 21, 21];
var lastRunRandoms = [];

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
new ImageConstructor('pet-sweet', 'images/pet-sweet.png', 0, 0);
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

var img_one = document.getElementById('img_one');
var img_two = document.getElementById('img_two');
var img_three = document.getElementById('img_three');
var img_container = document.getElementById('img_container');

img_container.addEventListener('click', doContainerStuff);

function doContainerStuff(event) {
  console.log(event.target.id);
  event.target.id = x;
  //
  //I need to compare the target id IE: img_two to thisRunRandoms in order to figure out which Image's constructed object to increment on click
};

//call some functions here
// genThreeRandoms();
