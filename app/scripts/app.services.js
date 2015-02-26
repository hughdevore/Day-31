angular.module('app.services', [])
.factory('one', function(){
	return function randomArray(array){
		var arrayLength = array.length;

		return array[Math.round(Math.random() * arrayLength)];
	};
})
.factory('two', function(){
	return function pairPicker(students){
		var randomNumber = Math.round(Math.random()*(10-1)+1);

	var pairArray = [];
	var pair = [];
	
	for (var i=0; i < students.length; i++) {
		pair.push(students.splice(randomNumber, 1));
		pair.push(students.splice(randomNumber, 1));
		pairArray.push(pair);
	}
	return pairArray;
	};
})
.factory('three', function(){
	return function stringDash(string){
		var myString = string.toString();

		for(var i=0; i < myString.length(); i++) {
			i + '-';
		}
		return myString;
	};
});
