/*
var studentList = [];

//put a few students into array
studentList.push({

	firstName: 'Smiley',
	lastInitial: 'D.',
	startDate: '7/1/14'
});

studentList.push({

	firstName: 'Dopey',
	lastInitial: 'D.',
	startDate: '7/3/14'
});

var renderList=function() {

	$('#studentList').empty();


//Loop through each student in studentList array
	for (var i=0; i<studentList.length; i++) {
		
		//creates an new element in the DOM; hopefully the dropdown
		

		//creates row of "Dropdown(link) "
		var newListItem = $('<li>');

		newListItem.append('<h4>' + studentList[i].firstName  + ", " + studentList[i].lastInitial + "Start Date:  " + studentList[i].startDate + '<h4>');

		console.log(newListItem);


		var actionsContainer = $('<div class="actions">');

		actionsContainer.appendTo(newListItem);

		newListItem.prependTo('#studentList');

		studentList[i].display = newListItem;

		newListItem.data('listIndex', i);
	};
};





//var newStudent = $('<li>');



$(document).on('ready', function() {
 
renderList();

});*/


var randomLoc = Math.floor(Math.random() * 5);
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

alert(stats);














 


