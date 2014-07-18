/*var randomLoc = Math.floor(Math.random() * 5);
var loc1 = randomLoc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {

	guess = prompt("Ready, aim, fire!  (enter a number from 0-6): ");

		if (guess < 0 || guess >6) {
			alert("Please enter a valid cell number");

				

		}	else {

			guesses = guesses +1;
		
				

				if (guess == loc1 || guess == loc2 || guess == loc3) {
				
				alert("hit");

				hits = hits + 1;


					if (hits == 3)  {

					isSunk = true;

					alert("You sank my battleship!");
				}

			}else {
				alert('miss');

			}
		
		}


	}



var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your accuracy was " + (3/guesses * 100 + "%");

alert(stats);*/


//grid battleship

var view = {
		//takes 1 argument which is "msg"
	displayMessage: function(msg) {
			//this gets the messageArea element from html
		var messageArea = document.getElementById("messageArea");
			//updates the text of messageArea
		messageArea.innerHTML = msg
	},

	displayHit: function (location) {
			//location will be created by the row and column matches on a <td> element
		var cell = document.getElementById(location);
			//This now sets the var cell to have a class of .hit
		cell.setAttribute("class", "hit");
	},

	displayMiss: function (location) {

		var cell = document.getElementById(location);

		cell.setAttribute("class", "miss");

	}
};

var model = {

		boardSize: 7, //boardSize, numShips, shipLength keeps us from hardcoding values
		numShips: 3,
		shipLength: 3,
		shipsSunk: 0, // initialize to 0 for start of game
				//generates locations so they are random
		ships: [{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]} ],

		fire: function(guess) {
				//iterates through numShips, looking at each one at a time
			for(var i=0; i < this.numShips; i++) {
				var ship = this.ships[i];

				 
					//returns the index of that value in the array
				var index = ship.locations.indexOf(guess);
					//if guess is >= 0, user's guess is in locations array
				if (index >= 0) {

					ship.hits[index] = "hit";
						//Notify view we have a hit
					view.displayHit(guess);
					view.displayMessage("HIT!");
						
					if (this.isSunk(ship)) {
						view.displayMessage("You sank my battleship!");
						 this.shipsSunk++;
						}
					return true;
					}

			}
					view.displayMiss(guess);
					view.displayMessage("You missed.");

					return false;
		},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
			return true;

	},

	generateShipLocations: function() {

		var locations;
		for (var i = 0; i < this.numShips; i++) {

			do {

				locations = this.generateShip ();
			} while (this.collision(locations));

			this.ships[i].locations = locations;
		}


},

generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
	
}; 


/*var controller = {

	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if(location){
			this.guesses++;
			var hit = model.fire(location);

			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses.");
			}
		}
	}
};*/

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var row = alphabet.indexOf(guess.charAt(0));
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
}
/*Hard coded for testing
controller.processGuess("A0");

controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");*/

function init() {
			//reference to the fire button in html by id
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	

	model.generateShipLocations();

}


		//this function is called on "fire" click
function handleFireButton () {

		var guessInput = document.getElementById("guessInput");
		var guess = guessInput.value;
			//players guess is passed to the controller object
		controller.processGuess(guess);
			//resets the form for the next guess
		guessInput.value = "";

}

window.onload = init;























