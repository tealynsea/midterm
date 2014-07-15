
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
		var newListItem = $('<li></li>');

		newListItem.append('<h4>' + studentList[i].firstName + ", " + studentList[i].lastInitial + "Start Date:  " + studentList[i].startDate);

		console.log(newListItem);


		//var actionsContainer = $('<div class="actions">');

		//actionsContainer.appendTo(newListItem);

		newListItem.prependTo('#studentRoster');

		studentList[i].display = newListItem;

		//newListItem.data('listIndex', i);
	};
};





//var newStudent = $('<li>');



$(document).on('ready', function() {
 
renderList();

});