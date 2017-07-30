// require inquirer
var inquirer = require("inquirer");

// require Basic Card file
var basic = require('./basicCard.js');

// require Cloze Card file
var cloze = require('./clozeCard.js')

var firstEmperor = new basic(
    "Who was the first emperor of China?", "Emperor Qin Shi Huang");

// "Who was the first emperor of China?"
console.log(firstEmperor.front); 

// "Emperor Qin Shi Huang"
console.log(firstEmperor.back); 

var firstEmperorCloze = new cloze(
    "Emperor Qin Shi Huang was the first emperor of China.", "Emperor Qin Shi Huang");

// "Emperor Qin Shi Huang"
console.log(firstEmperorCloze.cloze); 

// " ... was the first emperor of China.
console.log(firstEmperorCloze.partial()); 

// "Emperor Qin Shi Huang was the first emperor of China.
console.log(firstEmperorCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new cloze("This doesn't appear to work", "oops");