
/*
Practical JavaScript
Creating a To Do List
*/

//Create the storage space for the to do list - variable name - [array]
var toDos = ['item 1', 'item 2', 'item 3'];

//Create a function which will display the to do list
function displayToDos(){
	console.log("My to dos:", toDos);
}
//remember to call the function:
displayToDos()

//Function to add a new to do
function addToDo(){
	toDos.push('Add new to do');
}

addToDo()

/*Join the displayToDos with the addToDo so that you can see the changes
add the function name to the executable code of addToDo*/

function addToDo(todo){//including the todo parameter within parentheses allows us to add a new value later
	toDos.push(todo);//the toDos array.push item onto end of array. Item will be a value associated to the parameter above. Value is assigned when called
	displayToDos();//function created earlier to display the array
}
addToDo('New Item 4') //adds a new item called New Item 4 and will display the new list including new item

//function for changing to dos

function changeToDo(position, newValue){ //create the parameters which is the position to change and the new value to change to
toDos[position] = newValue; //calling the toDos array. The position within the array will be equal to a new value. Whatever is input to the calling of the function, will be added to the changeToDo function parameters, which will execute the code within {}, which then calls the toDos array. When the function is called, it is called with the new parameters of position 0 and value 'changed again' so the code will run with these values. 
displayToDos(); // This is the function created earlier which will display the changes
}

changeToDo(0, 'changed again')//call the function to change the to do array. Change the first item to the new value 'changed again'

//when calling the function remember to enter the position and value within the parentheses()

//function to delete to dos

function deleteToDo(position){
toDos.splice(position, 1);
displayToDos();
}

deleteToDo(0) //will delete the first item in the array.

/*
create a deleteToDo function with a position parameter
use the splice() with a position to delete and how many items to delete
display the to dos function
when calling the function delete to do, enter the position to delete
*/

//Objects*******************************************************************************

/*
Group related data and functions together
A computer is an object with various properties
Separated by commas
name of property: value of property
a variable where the properties and values are surrounded with curly braces
*/

var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches',
	purchaseYear: 2011
};

//an object is a variable name with properties. Variable is the computer with the properties and values

//To call the function use the variable name (object), .property

myComputer.operatingSystem //displays the string 'mac'

// Functions and Objects.this - methods

var person = {//same as above. Creating an object name which is person. Curly braces since its an object
	name: "Cameron", // Property is called name with a value of Cameron
	sayName: function(){ // the function name is the property and the value is the function
		console.log(this.name); //code to be executed in the sayName() this.name means this(keyword) object (person) calling the name property
	}
}

//using a function in an object is common - Its called a method - sayName is a method in the person object
//No function name is required because the way it is called is with the property name
//functions in objects are called methods

//The object we want to create is a todo list*****************************

/*Requirements
-Store the todos array on an object
-displayToDos method
-addToDo method
-changeToDo method
-deleteToDo method
*/

//Store the todos array on an object

var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3']
};

//the array created earlier is now added a property within the {} the object is called toDoList
//When the object name is called then the array values of the property toDos will display

//displayToDos method
//The displayToDos function created earlier was as follows:

function displayToDos(){
	console.log("My to dos:", toDos);
}

//to incorporate that into our toDoList object, we add it as a property which will become a method

var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3'],
  displayToDos: function(){ // The function will be called with the property name rather than a function name
  	console.log("My to dos:", this.toDos); // we no longer have access to the toDos variable so (this) is required
  }
};

//the toDos array is now within the object as a property. We use this.toDos to call the toDos item

//addToDo method
//The addToDo function created earlier was as follows:

function addToDo(todo){
	toDos.push(todo);
	displayToDos();
}
addToDo('New Item 4')

//to incorporate that into our toDoList object, we add it as a property which will become a method

var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3'],
  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },
  addToDos: function(todo){
  	this.toDos.push(todo);
  	this.displayToDos();
  }
};

//same as above for the displayToDos method. We put a comma at the end of the last one and add the addToDos function
//this.toDos will call the property within that object
//todo parameters are still required as with the function
//since we have created a displayToDos method, we can call that method using this.displayToDos()

//changeToDo method
//The changeToDo function created earlier was as follows:

function changeToDo(position, newValue){
toDos[position] = newValue;
displayToDos();
}

changeToDo(0, 'changed again')

//to incorporate that into our toDoList object, we add it as a property which will become a method

var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3'],
  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },
  addToDos: function(todo){
  	this.toDos.push(todo);
  	this.displayToDos();
  },
  changeToDos: function (position, newValue){
  	this.toDos[position] = newValue;
  	this.displayToDos();
  }
};

//deleteToDo method
//The deleteToDo function created earlier was as follows:

function deleteToDo(position){
toDos.splice(position, 1);
displayToDos();
}

deleteToDo(0)

//to incorporate that into our toDoList object, we add it as a property which will become a method

var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3'],
  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },
  addToDos: function(todo){
  	this.toDos.push(todo);
  	this.displayToDos();
  },
  changeToDos: function (position, newValue){
  	this.toDos[position] = newValue;
  	this.displayToDos();
  },
  deleteToDo: function (position){
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  }
};

//To action these methods = toDoList.deleteToDo(0);
//The benefit of this is that it groups together all the items into one object - organised way of doing things

//Booleans****************************************************************

/*
Requirements:
-toDoList.addToDo should add objects
-toDoList.changeToDo should change the todoText property
-toDoList.toggleCompleted should flip the completed property
*/

//toDoList.addToDo should add objects

//Change addtodo method so that it adds objects rather than text to our addtodos array
//We want to change the addtodo method to add objects to represent more data. Can then contain properties.
//The objective is as follows:

{
	todoText: 'item 1',
	completed: false
}

//we want to amend the above methods.


var toDoList = {
  toDos: [], //item strings deleted
  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },
  //********************************************Changing addtoDos
  addToDos: function(todoText){
  	this.toDos.push({//call the toDos array from 'this' object. Since this is created to add to dos, we add the push method
  		todoText: todoText, //we add in two properties to our object which is todoText and completed. Whatever value gets added to the todoText function parameter will be passed in to this as a value of the property.
  		completed: false  //Two values are added to our properties - todoText refers to the function parameter, false is the default when adding an item to a todolist
  	}); //Instead of passing in a to do that is a text string, we want to create an object here in the push parentheses
  	this.displayToDos();
  },
  //********************************************Changing addtoDos
  changeToDos: function (position, newValue){
  	this.toDos[position] = newValue;
  	this.displayToDos();
  },
  deleteToDo(position){
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  }
};

//The input is then toDoList.addToDos('This is a new object'); Which then adds 1 new object at the 0 position with the string text

//toDoList.changeToDo should change the todoText property

//The change to do method should just change the change to do text property on each to do object. There is two properties now (todoText and completed)

  changeToDos: function (position, todoText){//*
  	//this.toDos[position] = newValue;
  	this.toDos[position].todoText = todoText;//** todoText will be equal to a new value (change)
  	this.displayToDos();
  },

//*change parameter from newValue - we only want to change the todoText property in our addToDos
//**The first part remains unchanged, but we want the todoText property which will be = whatever change is assigned to the todoText parameter
//When the changeToDo is called, a position to change is entered, followed by the new value to be added to the todoText property

//toDoList.toggleCompleted should flip the completed property

//We want to be able to toggle the completed property from false to true to confirm a task is completed
//We need a new method because this is an action - add this on to the end of the code

var toDoList = {

  toDos: [],

  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },

  addToDos: function(todoText){
  	this.toDos.push({
  		todoText: todoText, //whatever value is passed into the parameter becomes a value of the todoText property.
  		completed: false
  	});
  	this.displayToDos();
  },

  changeToDos: function (position, newValue){
  	this.toDos[position] = newValue;
  	this.displayToDos();
  },

  deleteToDo(position){
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  },

  toggleCompleted: function(position){ //we want to highlight which value is completed with the position parameter
  	var todo = this.toDos[position];
  	todo.completed = !todo.completed; //we want to change the property to the !opposite of what it is. Change property from false to true
  	this.displayToDos();
  }

};

//Conditionals****************************************************************

/*

If you want to say hi for example 3 times then you would use a loop

i = 0                       //initialisation
say "hey" if 1 < 3          //condition
increase i by 1             //final expression - increase i by 1

i would start at 0 and as long as i is less than 3 it will say hey, then add 1 to i
When it gets to 3 it will stop

Use a for loop:

for (initialisation, condition, final expression){
	console.log('hey')
};


*/

for(var i=0; i < 3; i++){
	console.log('hey')
}

/*

For loops and Arrays***
Create an array, then console.log(testArray[i]);
Using the number 3 isn't ideal because 3 isn't always true. We need more dynamic conditions by using the length

i < testArray.length


*/

/*
Requirements:

.displayToDos show .todoText
.displayToDos should tell you if .todos is empty
.displayToDos should show .completed

*/

//displayToDos show .todoText

var toDoList = {

  toDos: [],

  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  },

  addToDos: function(todoText){
  	this.toDos.push({
  		todoText: todoText, //whatever value is passed into the parameter becomes a value of the todoText property.
  		completed: false
  	});
  	this.displayToDos();
  },

  changeToDos: function (position, newValue){
  	this.toDos[position] = newValue;
  	this.displayToDos();
  },

  deleteToDo(position){
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  },

  toggleCompleted: function(position){ //we want to highlight which value is completed with the position parameter
  	var todo = this.toDos[position];
  	todo.completed = !todo.completed; //we want to change the property to the !opposite of what it is. Change property from false to true
  	this.displayToDos();
  }

};

/*
displayToDos is calling an array that doesn't exist. We want it to display the values that are passed into the todoText property in addToDos
We amend the displayToDos as follows:
*/

  displayToDos: function(){
  	console.log("My to dos:", this.toDos);
  	for(var i = 0; i < this.toDos.length; i++);
  	console.log(this.toDos[i].todoText);//logs the todoText for each item in our variable
  },


//Since we are displaying a list of values within an objects property, we need to use a for loop to search for the listed items.

/*
.displayToDos should tell you if .todos is empty
If there are no toDos we want to highlight a message to say there are no todos
Conditionals = we will run the for loop if something is true (there are todos)
or ELSE we will run the message to say there are no toDos
=== is the most consistent way to compare values rather than ==
if this.toDo.length === 0 then run the code or else run other code
*/

displayToDos: function(){
	if(this.toDos.length === 0){
		console.log('Your To Do List is empty!');
	} else {
  	console.log("My to dos: ");
	}
  	for(var i = 0; i < this.toDos.length; i++){
  	console.log(this.toDos[i].todoText);//logs the todoText for each item in our variable
  	}
  },

  /*
  .displayToDos should show .completed
  toDos.completed is a property of the toDos object
  We want to show if an item is completed or not completed
  check if .completed is true
  print with (x)
  else
  print with ()

  ( ) item 1
  (x) item 2
  (x) item 3

  */

  displayToDos: function(){
	if(this.toDos.length === 0){
		console.log('Your To Do List is empty!');
	} else {
  	console.log("My to dos: ");
	}
  	for(var i = 0; i < this.toDos.length; i++){
  	console.log(this.toDos[i].todoText);//logs the todoText for each item in our variable
  	}
  },

//code required:

  if(this.toDos[i].completed === true){
  	console.log('(x)', this.toDos[i].todoText);
  } else {
  	console.log('( )', this.toDos[i].todoText);
  }

    /*
    .toggleAll - If everything is true, make everything false - Default is false meaning the tasks are all NOT completed. If everything is true then all the tasks are completed.
    .toggleAll - otherwise make everything true
    When making a to do list, if you have completed all the tasks, you click a button at the top which checks all items in your list
    if completed is true (to do is done) , ticking the button will make them all false (to do is NOT done)
    if completed is false(to do is NOT done) , ticking the button will make them all true (to do is DONE)
    */

//.toggleAll - If everything is true, make everything false (First requirement)

//new method

toggleAll: function(){
    //In order to find out if everything is true we need to compare the completedToDos with the totalToDos. If completedToDos are all true (DONE) we can then change them all to false (NOT done)
	//completedToDos === totalToDos - create these two variables
	//to get the total to dos we just get the total number of to dos using the length property from the array of items in the toDo array
	var totalToDos = this.toDos.length;
	//For completedToDos we need to go through the list to see which items in the list are complete and which ones arent using a loop
	var completedToDos = 0;
	//loops start at 0
	//To get number of completedToDos:
	for(i = 0, i < totalToDos, i++){
		if(this.toDos[i].completed === true) {
			completedToDos++;
		} else {
            //.toggleAll - otherwise make everything true   - code below
        }
	}

//.toggleAll - otherwise make everything true    

	if(completedToDos === totalToDos) {
		//make everything false
		for(var i = 0, i < totalToDos; i++){
			this.toDos[i].completed = false;
		}
	}
}

toggleAll: function(){
	var totalToDos = this.toDos.length;
	var completedToDos = 0;
	for(i = 0, i < totalToDos, i++){
		if(this.toDos[i].completed === true){
			completedToDos++;
		} else {
        if(completedToDos === totalToDos) {
		for(var c = 0, c < totalToDos; c++){
			this.toDos[c].completed = false;
		} else {
            for (var p = 0; p < totalToDos; p++) {
                this.toDos[p].completed = true;
            }
        }
	}
}

        //Because we were using a method (function) we had to change the for loops var from i to c and p because var i was already declared within the local scope.

//.toggleAll - otherwise make everything true



