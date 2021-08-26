//if statement
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}

/**conditions
condition is an expression that evaluates as a value either true or false: it’s called a boolean value. 
When the value of a condition is true, we say that this condition is satisfied. 

We have already studied numbers and strings, two types of data in JavaScript. Booleans are another type. 
This type has only two possible values: true and false.

Any expression producing a boolean value (either true or false) can be used as a condition in an if statement. 
If the value of this expression is true, the code block associated with it is executed.

if (true) {
  // The condition for this if is always true
  // This block of code will always be executed
}
if (false) {
  // The condition for this if is always false
  // This block of code will never be executed
}

**/

/*
comparison operators
===    Equal
!==    Not Equal to
<      Less Than
<=     Less than or equal to
>      Greater than
>=     Greater than or equal to **/

//the else statement
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else {
  console.log(`${number} is negative or zero`);
}
/**
if (condition) {
  // Code to run when the condition is true
}
else {
  // Code to run when the condition is false
} */

//Nesting conditions
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else {
  // number <= 0
  if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    // number === 0
    console.log(`${number} is zero`);
  }
}

//with else if
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}

//And opetator (&&)
let number = 4;

if (number >= 0 && number <= 100) {
  console.log(`${number} is between 0 and 100, both included`);
}

/**
The && operator (“logical and”) can apply to both types of boolean values. 
true will only be the result of the statement if both conditions are true.
*/
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//OR operator(||)
/**
The || operator (“logical or”) makes statements true if at least one of the statements is true. 
Here’s its truth table:
*/
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//Not operator(!)
/**
There’s another operator for when you know what you don’t want: the not operator! You’ll use a ! for this.
*/
const number = 60;

if (!(number > 100)) {
  console.log(`${number} is less than or equal to 100`);
}

//truth table for ! operator
console.log(!true); // false
console.log(!false); // true

//multiple choices with switch statments
const weather = prompt("What's the weather like?");

switch (weather) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}
