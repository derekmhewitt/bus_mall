'use strict';

// this js file holds the image rotation script, every activation is called a run

//this little guy is a global helper and he's going to hold a bunch of my stuff for me so my js doesn't get too cluttered

//constructor function for image objects

var globalHelper = {
  numRuns: 0,
  constructedImages: [],
  thisRunRandoms: [],
  lastRunRandoms: [],
  // unconstructedImages: [] this empty array goes with the prototype funciton for automaticly running the images through the constructor function with a for loop.  It's disabled for now and will probably remain so for a while
};

function ImageConstructor(imageName, imagePath, timesShown, clicks) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.timesShown = timesShown;
  this.clicks = clicks;
  globalHelper.constructedImages.push(this);
};

//create image objects here by calling constructor
new ImageConstructor('bag', 'images/bag.png', 0, 0);
new ImageConstructor('banana', 'images/banana.png', 0, 0);
new ImageConstructor('bathroom', 'images/bathroom.png', 0, 0);

//maybe come back to this, it's a good idea but too complicated to get barely working
// globalHelper.prototype.generateImageObjects = function() {
//   for(var i = 0; i < globalHelper.unconstructedImages.length; i++) {
//     ImageConstructor(globalHelper.unconstructedImages[i]);
//   }
// };

// Math.random() * 20 = blah
// check against thisRunRandoms and lastRunRandoms
// store thisRunRandoms in lastRunRandoms
// load thisRunRandoms with 3 new random #\'s

// globalHelper.prototype.generateRandomNumbers = function() {
//   Math.floor(Math.random() * (globalHelper.unconstructedImages.length - 0 + 1) + 0);
// };
