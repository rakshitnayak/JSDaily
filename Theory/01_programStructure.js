/*
statements:Each instruction inside a program is called a statement. 
A statement in JavaScript usually ends with a semicolon(not mandatory)

Execution flow: When a program is executed, the statements in it are “read” one after another. 
It’s the combination of these individual results that produce the final result of the program.
*/

console.log("Hello from JavaScript!");
console.log("Let's do some math");
console.log(4 + 7);
console.log(12 / 0); //12 divided by zero gives infinty
console.log("Goodbye!");

/*
Comments:
By default, each line of text in the source files of a program is considered a statement that should be executed.
You can prevent certain lines from executing by putting a double slash before them: //. This turns the code into a comment
*/
//comments can also be written as /* */ around the code.

console.log("Hello from JavaScript!");
// console.log("Let's do some math");
console.log(4 + 7);
// console.log(12 / 0);
console.log("Goodbye!");

/* A comment
written on
several lines */

// A one line comment

//predict the output values
console.log(4 + 5); //9
console.log("4 + 5"); //4+5
console.log("4" + "5"); //45
