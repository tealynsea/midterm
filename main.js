
var studentList = [];

//put a few students into array
studentList.push({

	firstName: 'Smiley',
	lastInitial: 'D.'
});

studentList.push({

	firstName: 'Dopey',
	lastInitial: 'F.'
});

var renderList=function() {

	$('#studentList').empty();


//Loop through each student in studentList array
	for (var i=0; i<studentList.length; i++) {
		
		//creates an new element in the DOM; hopefully the dropdown
		

		//creates row of "Dropdown(link) "
		var newListItem = $('<li></li>');

		newListItem.append('<h6>' + studentList[i].firstName + ", " + studentList[i].lastInitial);

		console.log(newListItem);


		//var actionsContainer = $('<div class="actions">');

		//actionsContainer.appendTo(newListItem);

		newListItem.prependTo('#studentList');

		studentList[i].display = newListItem;

		//newListItem.data('listIndex', i);
	};
};





//var newStudent = $('<li>');



$(document).on('ready', function() {
 
renderList();

});