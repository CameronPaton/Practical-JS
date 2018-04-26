/* HTML and the DOM

Requirements:

.There should be a displayToDos button and a toggleAll button in the app
.Clicking displayToDos should run the toDoList.displayToDos
.Clicking toggleAll should run toDoList.toggleAll

*/

//.There should be a displayToDos button and a toggleAll button in the app

/*
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <h1>To Do List</h1>
    
    <button>Display To Dos</button>
    <button>Toggle All</button>
    
    
  </body>

</html>
*/
//.Clicking displayToDos should run the toDoList.displayToDos

/* 
.Access the dislay to dos button
.Access the displayToDos method, when someone clicks the displayToDos button.
*/

//Give the button an ID in the HTML

<button id='displayToDosButton'>Display To Dos</button>

//Get the element in the js file

var displayToDosButton = document.getElementById('displayToDosButton');
//console.log(displayToDosButton); Don't need this now the button works

//Run the displayToDos method, when someone clicks the displayToDos button

displayToDosButton.addEventListener('click', function(){
    toDoList.displayToDos();
});

//we addEventListener with the event we want to happen which is when someone clicks the button, followed by running the displayToDos method


//=============================toggleAll button===========================================

//add a var toggleAllButton and assign it to Id and addEventListner with toggleAll method

var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function(){
    toDoList.toggleAll();
});

//debugging

/*
      var displayToDosButton = document.getElementById('displayToDosButton'); // allows us to access the displayToDos button
      //console.log(displayToDosButton); //run the dislayToDos (don't need this anymore because the button works)
      var toggleAllButton = document.getElementById('toggleAllButton');
      
      displayToDosButton.addEventListener('click', function(){ //we addEventListener with the event we want to happen which is when someone clicks the button, followed by running the displayToDos method
        toDoList.displayToDos();
      });
          
      toggleAllButton.addEventListener('click', function(){
        toDoList.toggleAll();
      });
*/


    var handlers = { //by creating a handlers object, it is handling the button events. Much less code than document.getElementById(); shown above. Not alot of repetition. 
      displayToDos: function(){
        toDoList.displayToDos();
      },
      toggleAll: function(){
        toDoList.toggleAll();
      }
    };      
          
          
/*
=================================================================================================
REQUIREMENTS
=================================================================================================
*/

//-It should have working controls for addToDo, changeToDo, deleteToDo and toggleCompleted.


//.addToDo

//Update the HTML file with buttons separated by divs. For add to do we add a button called add with an onclick event. We add an input field with type="text" and an ID

    var handlers = { //by creating a handlers object, it is handling the button events. Much less code than document.getElementById(); shown above. Not alot of repetition. 
      displayToDos: function(){
        toDoList.displayToDos();
      },
      toggleAll: function(){
        toDoList.toggleAll();
      },
      addToDo: function(){ //new addToDo method. An ID of addToDoTextInput was added to the HTML file. 
        var addToDoTextInput = document.getElementById("addToDoTextInput");//grab the Id from the HTML file and create it as a var so that it can be referenced
        toDoList.addToDos(addToDoTextInput.value); //call the toDoList object and addToDos method to run with whatever value is inserted to the addToDoTextInput field
        addToDoTextInput.value=""; //clear the field after the code is run
      }
    };  


//For changeToDos:

/*
In the HTML we create a new div with a button with an onclick event and change to do name. There are two input fields, one for the position we are to change, and one for the new text input. Ids are added to these input fields so that they can be referenced in the JS file. 

A new method is created called changeToDo in the handlers object. 

*/

    var handlers = { //by creating a handlers object, it is handling the button events. Much less code than document.getElementById(); shown above. Not alot of repetition. 
      displayToDos: function(){
        toDoList.displayToDos();
      },
      toggleAll: function(){
        toDoList.toggleAll();
      },
      addToDo: function(){
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        toDoList.addToDos(addToDoTextInput.value);
        addToDoTextInput.value="";
      },
      changeToDo: function(){
        var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");//Two variables are created, one for the position number input and one for the text to change to
        var changeToDoTextInput = document.getElementById("changeToDoTextInput");
        toDoList.changeToDos(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value); //we call from the toDoList object the changeToDos method with parameters of the variables
        changeToDoPositionInput.value=""; //clear the input field after the information is entered
        changeToDoTextInput.value=""; //clear the text field once the information is entered. 
      }
    };   


//since we are calling a number value, the value property will be valueAsNumber. value is fine to use for the text property 

//For delete To Dos:

//the handlers.deleteToDo() method was created. Similar to the changeToDo above. HTML updated with a button to delete in a div. 

    var handlers = { //by creating a handlers object, it is handling the button events. Much less code than document.getElementById(); shown above. Not alot of repetition. 
      displayToDos: function(){
        toDoList.displayToDos();
      },
      toggleAll: function(){
        toDoList.toggleAll();
      },
      addToDo: function(){
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        toDoList.addToDos(addToDoTextInput.value);
        addToDoTextInput.value="";
      },
      changeToDo: function(){
        var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
        var changeToDoTextInput = document.getElementById("changeToDoTextInput");
        toDoList.changeToDos(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
        changeToDoPositionInput.value="";
        changeToDoTextInput.value="";
      },
      deleteToDo: function(){
        var deleteToDoPositionInput = document.getElementById("deleteToDoPositionInput");//due to the parameter requirements of deleteToDo(), we must enter a position to delete. 
        toDoList.deleteToDo(deleteToDoPositionInput.valueAsNumber);
        deleteToDoPositionInput.value="";
      }
    };      
          
  // For Toggling a To Do:

    //create a toggleCompleted button in the HTML (Requires a number to toggle from true to false or vice versa). Same as the above items. 


      toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value="";
      },


/* 
==================================================
REQUIREMENTS
==================================================
*/
          
//There should be an <li> for every toDo item
//Each li element should contain .toDoText property
//Each li element should show completed
          
//---No longer a requirement for a displayToDos() - it will display on screen. 

//Inserting <li> elements into the DOM
          
//We don't know how many <li> there will be so we need to dynamically add <li>

var todoli = document.createElement('li'); //this will add a list item

//we need to add the li to ul. Another var can be created:

var todosul = document.querySelector('ul'); //flexible - add query or search term. Accepts name or element type

//since the <ul> will contain the li, then the li are child elements. We need to append the child of the ul

todosul.appendChild(todoli);//we are querySelector to call the ul, then creating an li element by calling the todoli variable with the append child method.

  var view = {//responsible for things the user views
      displayToDos: function(){
        var toDosUl = document.querySelector('ul');//outside the FOR loop
        toDoUl.innerHTML='';//Should clear the list and only display one set of toDos
        for(var i = 0, i < toDoList.toDos.length; i++){//loops through the items in our toDos array = if there are no items nothing will appear in document. If there are 5 items in the list it will display those 5 items in the document.
          var toDoLi = document.createElement('li');//this is what the for loop will run
          toDosUl.appendChild(toDoLi);
        }
      }
  };   

//view.displayToDos will always add the number of items in the list to the screen. If there are two items, it will show two items, but if you run the method again, it will show those two items twice (duplication). It needs to clear the items to prevent duplications

//Each li element should contain .toDoText property

//At the moment it is just bullet points appearing in the document. We want the text values to also appear


  var view = {//responsible for things the user views
      displayToDos: function(){
        var toDosUl = document.querySelector('ul');//outside the FOR loop
        toDoUl.innerHTML='';//Should clear the list and only display one set of toDos. innerHTML deals with whatever is between the tags.
        for(var i = 0, i < toDoList.toDos.length; i++){//loops through the items in our toDos array = if there are no items nothing will appear in document. If there are 5 items in the list it will display those 5 items in the document.
          var toDoLi = document.createElement('li');//this is what the for loop will run
          toDoLi.textContent = toDoList.toDos[i].todoText;  //the toDoLi will include the text content from whatever is entered in the toDos array within the toDoList object using the parameter todoText which collects a value. i is a reference to the item in the loop.
          toDosUl.appendChild(toDoLi); //call the toDosUl in order to append the child elements. Run the var toDoLi which adds the required li
        }
      }
  };  

//Each li element should show () completed


  var view = {
      displayToDos: function(){
        var toDosUl = document.querySelector('ul');
        toDoUl.innerHTML='';
        for(var i = 0; i < toDoList.toDos.length; i++){
          var toDoLi = document.createElement('li');
          var todo = toDoList.toDos[i]; //var todo is created so we don't have to type out toDoList.toDos[i] over and over
          var toDoTextWithCompletion = ''; //var has been created to add a text string later with ( ) or (x) 
            
            if(todo.completed === true){ //using the todo var that has been created above, check the completed property is true
                toDoTextWithCompletion =  '(x) ' + todo.todoText; //if true, using var created above, add string with completed + content of input in todoText
            } else{
                toDoTextWithCompletion =  '( ) ' + todo.todoText;//Or if false, using var created above, add string with not completed + content of input in todoText
            }
            
          toDoLi.textContent = toDoTextWithCompletion;
          //toDoLi.textContent = toDoList.toDos[i].todoText;  //we no longer require this because the todoText is now combined with toDoTextWithCompletion
          toDosUl.appendChild(toDoLi); 
        }
      }
  };  


//Escaping the console

//We want the data to appear automatically in the document without having to click on displayToDos or enter the view.displayToDos();

/*
We need to remove the displayToDos button and add view.displayToDos() at the end of every handler.
We can then add items to our list and they appear in the document. This applies to all functions such as toggle etc.
We can now delete the button in the HTML and handlers.displayToDos();
Delete this.displayToDos in toDoList.toggleAll; and the same to be deleted in toggleCompleted, addToDos, changeToDos etc
delete all of toDoList.displayToDos code - it is no longer required
*/


/*
REVIEW
We added elements and manipulated elements to display the toDos in the document rather than the console
Code is organised: 
- toDoList has methods to update the toDos array
- Handlers are focused on handling user interactions - each method deals with various user interactions - Provide button handlers for our user interface
- the view object is only concerned with showing the user what the toDoList looks like. It doesn't deal with button clicks, doesn't delete or modify, only what it looks like. 
*/

//========Run with Debugger

/*

We can create a function with a for loop in the console, in the debugger we can skip lines and go into the function to see how it works.
Instead of having to check the function manually, we can create a function called runWithDebugger(ourFunction); which will run the debugger
Run with debugger enhances other functions
Functions can be passed into other functions (module = functions inside other functions)
*/

function runWithDebugger(ourFunction){
    debugger;
    ourFunction();
};

//setTimeout: Text based alarm clock

setTimeout(function(){
    console.log('wake up');
}, 5000)

//setTimeout enhances the behaviour of the inserted function by turning it into an alarm clock. 5000 is 5 seconds (counts in milliseconds)

//forEach:


var students =['Cameron', 'Thomas', 'Hollie'];

function logName(name){
    console.log(name);
} // we want to run console.log for each item in the students array

//Normally how to collect items from an array:

logName(students[0]);
logName(students[1]);

//very manual. Improvement could be made with for loop:

for(var i; i < students.length; i++){
    logName([i]);
}

//shorter option:

students.forEach(logName);

//or add in the function to forEach parentheses

students.forEach(function logName(name){
    console.log(name);
})

//or no function name

students.forEach(function(name){
    console.log(name);
})

//A function is passed into another function
//forEach is a built in function of an array

function forEach(myArray, myFunction){
    for(var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);//run function on every item in the array. Add current loop item to run in function
    }
}

forEach(students, function(students) {
    console.log(students);
})

//addEventListener====================================================================

/*
In the Mozilla website, right click and inspect a header. It shows a reference in Chrome that can be called to see that element $0
We can create a variable to call that
var tutorialsElement = $0

*/

var tutorialsElement = $0;

tutorialsElement.addEventListener('click', function(){
    console.log('Tutorials Element Clicked!');
}); //another example of a function that enhances another function and its behaviour. Function will only run when item is clicked


//an event object is passed in and can be used

tutorialsElement.addEventListener('click', function(event){
    console.log(event);
    console.log('Tutorials Element Clicked!');
}); //this will show information about the event

//REVIEW:

/*

There are two types of function:
-Higher order functions:
    Accept other functions
    Enhance the behaviour of other functions
-Callback functions:
    Functions passed into higher order functions
    
*/

//transferring to glitch.com from Plunker - http://glitch.com/~forest-green

//All code up until now is transferred over to glitch.com - signed in under github

//============NEW MODULE=======================

//The return statement

/*
return a value
*/

function multiplyTwoNumbers(a, b){
    var result = a*b;
}

var theProductof2and10 = multiplyTwoNumbers(2, 10);

//all we do is add a new line = return result

function multiplyTwoNumbers(a, b){
    var result = a*b;
    return result;
}//returns the value

//This is important because we will have functions that create buttons and functions will give us back a button - return a button

//============REQUIREMENTS================

//for changeToDo we have to input an index number to change. There will be a delete button for every item rather than entering a number to delete

//There should be a way to create the delete buttons
//There should be a delete button for every to do
//Each li should have an id that has the todo position (we are no longer adding an index. Delete needs to know which li to delete still)
//delete buttons should have access to the todo id (delete option will access the id created in above requirement)
//clicking delete should update todolist.todos and the DOM

//==========================================

//There should be a way to create the delete buttons

/*
We create a new method within the view object because the displayToDos method is large
*/


  var view = {
      displayToDos: function(){
        var toDosUl = document.querySelector('ul');
        toDoUl.innerHTML='';
        for(var i = 0; i < toDoList.toDos.length; i++){
          var toDoLi = document.createElement('li');
          var todo = toDoList.toDos[i]; 
          var toDoTextWithCompletion = ''; 
            
            if(todo.completed === true){ 
                toDoTextWithCompletion =  '(x) ' + todo.todoText; 
            } else{
                toDoTextWithCompletion =  '( ) ' + todo.todoText;
            }
            
          toDoLi.textContent = toDoTextWithCompletion;
          toDosUl.appendChild(toDoLi); 
        }
      },
      createDeleteButton: function(){
          var deleteButton = document.createElement('button'); //create a var which will add a button element to the html
          deleteButton.textContent = 'Delete'; //we can now reference the above variable deleteButton and add text to the button called Delete
          deleteButton.className = 'deleteButton'; //Due to there being lots of buttons to add to li, we add a class name to the buttons
          return deleteButton;
      }
  }; 



//There should be a delete button for every to do

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());//new code is added in view.displayToDos() - we are amending a child of the li like above with completions. We then call a method from this object which is createDeleteButton.
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};

//Each li should have an id that has the todo position (we are no longer adding an index. Delete needs to know which li to delete still)

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i; //this will give each item in the loop a unique ID which can be referenced later when deleting or changing
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
    
//the result is that when items are added, open in the console and check under the ul that unique id numbers are now being added to each new item
    
//delete buttons should have access to the todo id
    
/*

Lots of event listeners not good for memory. We can combine it into one event listener.
If we use the <ul> element instead of each <li> then this will use events within the list

*/
    
    
var toDosUl = document.querySelector('ul');
    
toDosUl.addEventListener('click', function(event){  //When we run the function, we access the event object. 
    console.log(event.target.parentNode.id); //We then can access event object, target which was the event that took place (click on delete button), access parent node of delete button which is the li, access the unique id of that li. 
});

//When we run the callback function with the event object passed in, we see in the console the target which is the point we care about. Target tells us which item we clicked on.
//id is on the li element = we can access the li element from the delete button using the parentNode - if we see the property of the delete button and see the parentNode, it is the li. There is an id next to that in the console #0 which is how we will access it. 

//clicking delete should update todolist.todos and the DOM

/* 
We need to get the element that was clicked on
Check if the element clicked in the delete button
Run handlers.deleteToDo(position);
We can delete handlers.deleteToDo(); which required an index number
How will we get the position? The position is the id of the li element 
We need to add the code to the view object
*/

var elementClicked = event.target;


    
var toDosUl = document.querySelector('ul');
    
toDosUl.addEventListener('click', function(event){
    
    var elementClicked = event.target;
    
    if(elementClicked.className === 'deleteButton'){
        handlers.deleteToDo(parseInt(elementClicked.parentNode.id)); //if we receive the string 0 then with parseInt we will get the integer 0
    }
    
    
    
});
    
//remaining code of handlers.deleteToDo();
  deleteTodo: function(position) { //How will we get the position? The position is the id of the li element 
    todoList.deleteTodo(position);
    view.displayTodos();
  },
    
 //Outcome is as follows:
      

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function(){
    var toDosUl = document.querySelector('ul'); //create a variable so that the ul can be referenced in the function
    toDosUl.addEventListener('click', function(event){ //reference the var created above to call the ul, add the event listener for a click and the callback function parameter will have an event object value. 
    var elementClicked = event.target; //which event was clicked on? Target of event. Event listener in the ul is looking for a click.
    if(elementClicked.className === 'deleteButton'){ //within the target property of the event object, if elementClicked has a class of deleteButton:
        handlers.deleteToDo(parseInt(elementClicked.parentNode.id));//call the handlers.deleteToDo(); method. Value will be the id number in the parent node of the delete button <li>. What we get is a string so we need it to be a number so parseInt is used. 
      } 
    });
  }
};

view.setUpEventListeners();//we must call the function afterwards so that it runs. It is to happen when an element is clicked 

//delete the delete button from the HTML

//Event Delegation: Stack Overflow: What is Event Delegation: Single common parent delegates events through child elements (ul > li)
    
    
//===========REQUIREMENTS============

//todolist.toggleAll should use forEach
//view.displayTodos should use forEach

//no for loops in app whatsoever

//todolist.toggleAll should use forEach:

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
      /*
    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    */
     
    this.todos.forEach(function(todo){ //todos is an array which is why we can use forEach. Add in the callback function with a todo parameter
        if (todo.completed === true) { //if the items from the values added to the todo parameter have a value of completed = true
        completedTodos++; //increment completedToDos by 1
      }
    });
      
    // Case 1: If everything’s true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }      
    }
  }
};


    // Case 1: If everything’s true, make everything false.
    if (completedTodos === totalTodos) {
      //for (var i = 0; i < totalTodos; i++) {
        //this.todos[i].completed = false;
      }
    
    
    this.todos.forEach(function(todo) {
        todo.completed = false;
    });
    
    
    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }   
    
    } else{
        this.todos.forEach(function(todo) {
            todo.completed = true;
        });
    }
    
 //we want a forEach for case 1 and case 2 - this is another way of doing for loops with less code

this.todos.forEach(function(todo){
    if(completedTodos === totalTodos){
        todo.completed = false;
        
    } else {
        todo.completed = true;
    }
}),
    
};
    
 //complete toDoList.toggleAll() method:

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo){
        if (todo.completed === true) { 
        completedTodos++; 
        }
      });
    
    this.todos.forEach(function(todo){
    if(completedTodos === totalTodos){
        todo.completed = false;
        
    } else {
        todo.completed = true;
    }
});
    
 //view.displayTodos should use forEach
      
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
    
//new version of view.displayToDos(); with forEach:
    
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    
    todoList.todos.forEach(function(todo, position){ //two parameters passed in which includes position
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';

        if (todo.completed === true) {
            todoTextWithCompletion = '(x) ' + todo.todoText;
          } else {
            todoTextWithCompletion = '( ) ' + todo.todoText;
          }

          todoLi.id = position;
          todoLi.textContent = todoTextWithCompletion;
          todoLi.appendChild(this.createDeleteButton());
          todosUl.appendChild(todoLi);
      }, this);
  },

//because we are adding a callback function, this.createDeleteButton will not refer back to the view object to get the view property. We add 'this' to the forEach so that it can call the view object. this in the callback will also be equal to the view

    
    
    
    
    