//creating empty array for weekly goals

var weeklyGoal = [];

weeklyGoal.push({

	goal1: 'Be nice to Teri!',
	step1: 'Tell her she is pretty!',
	step2: 'Say, "Yoda is my favorite Jedi."',
	step3: 'Bring her a Pepsi'
});



var renderList=function() {

	$('#weekly-goals').empty();


	for (var i=0; i<weeklyGoal.length; i++)  {

		var newGoal = $('<li id="goalBorder">');

		newGoal.append('<h2>' + weeklyGoal[i].goal1 + '</h2>' + '<br>' + '<h4>'  +weeklyGoal[i].step1 + '<br>' + weeklyGoal[i].step2 + '<br>' + weeklyGoal[i].step3);
		/*newGoal.append('<h3 id="goalHeading">' + "Weekly Goal:  " + weeklyGoal[i].goal1 + '</h3>''</br>' + '<h5 id="steps">' + "Step 1:  " + weeklyGoal[i].step1 '</br>'  +  "Step 2:  " + weeklyGoal[i].step2 + '</br>' + "Step 3:  " + weeklyGoal[i].step3 + '</h5>');*/

		var actionsContainer = $('<div class="actions>');

		actionsContainer.appendTo(newGoal);
		newGoal.prependTo('#weekly-goals');
		weeklyGoal[i].display = newGoal;
		newGoal.data('listIndex', i);

	};

};

var newGoalAdd = function(eventArguments) {

	eventArguments.preventDefault();

	var goalField = $(this).find('[name = goal-main]');
	var step1Field = $(this).find('[name = step-1]');
	var step2Field = $(this).find('[name = step-2]');
	var step3Field = $(this).find('[name = step-3]');

	var newWeeklyGoal = goalField.val();
	var newstep1 = step1Field.val();
	var newstep2 = step2Field.val();
	var newstep3 = step3Field.val();

	var newGoalList = {

		goal1: newWeeklyGoal,
		step1: newstep1,
		step2: newstep2,
		step3: newstep3
	};

weeklyGoal.push(newGoalList);

renderList();

goalField.val('');
step1Field.val('');
step2Field.val('');
step3Field.val('');

}



$(document).on('ready', function() {

renderList();

$('#newAdded').on('submit', newGoalAdd);


});