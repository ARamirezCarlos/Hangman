var FruitsList = ["banana","strawberry","apple"];

var chosenword = '';

var letterInChosenword = [];

var numblanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;





function startGame() {
	numGuesses = 0;
	chosenword = FruitsList[Math.floor(Math.random() = FruitsList.length)]
	letterInChosenword = chosenword.slit("");
	numblanks = letterInChosenword.length;
	console.log(chosenword)
}