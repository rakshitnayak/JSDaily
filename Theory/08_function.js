/*
A function is a group of statements that performs a particular task.*/

//declaring a function
function sayHello() {
  console.log("Hello!");
} /*This creates a function called sayHello(). It consists of only one statement that will make a 
message appear in the console: "Hello!". This is an example of a function declaration.*/

//function call
console.log("Start of program");
sayHello(); //call sayhello
console.log(
  "End of program"
); /*The second line makes a call to the function sayHello()*/

/*
Function Contents
Return value:
In this example, the body of the sayHello() function has changed: the statement console.log("Hello!") 
was replaced by return "Hello!". The keyword return indicates that the function will return a value,
 which is specified immediately after the keyword. This return value can be retrieved by the caller.
*/
//ex:1;
function sayHelloo() {
  return "Hello!";
}

console.log("Start of program");
const message = sayHelloo(); // Store the function return value in a variable
console.log(message); // Show the return value
console.log("End of program");

//ex:2;
function myFunction1() {
  let returnValue;
  returnValue = 1 + 7;

  return returnValue;
}
const result = myFunction1();
console.log(result);

/*
local variables:
You can declare variables inside a function.
The function sayHello() declares a variable named message and returns its value. 
The variables declared in the body of a function are called local variables. 
Their scope is limited to the function body (hence their name). 
If you try to use these local variables outside the function, you won’t be able to! */
function sayHelllo() {
  const message = "Hello!";
  return message;
}

console.log(sayHelllo()); // "Hello!"

/*parameter passing
A parameter is information that the function needs in order to work. 
The function parameters are defined in parentheses immediately following the name of the function. 
You can then use the parameter value in the body of the function.*/
function sayHello2(name) {
  const message = `Hello, ${name}!`;
  return message;
}

console.log(sayHello2("Baptiste")); // "Hello, Baptiste!"
console.log(sayHello2("Thomas")); // "Hello, Thomas!"
/*
// Declare a function myFunction with parameters
function myFunction(param1, param2, ...) {
  // Statements using param1, param2, ...
}

// Function call
// param1 value is set to arg1, param2 to arg2, ...
myFunction(arg1, arg2, ...);*/
