/*
A computer program stores data using variables. A variable is an information storage area. 
We can imagine it as a box in which you can put and store things!

Properties:
-> Its name, which identifies it. A variable name may contain upper and lower case letters,
numbers (not in the first position) and characters like the dollar sign ($) or underscore (_)
-> Its value, which is the data stored in the variable.
-> Its type, which determines the role and actions available to the variable.

Note:
You don’t have to define a variable type explicitly in JavaScript. Its type is deduced from the value stored in the 
variable and may change while the program runs. That’s why we say that JavaScript is a dynamically typed language. 
Other languages, like C or Java, require variable types to always be defined. This is called static typing.
*/

//declaring a variable
let a;
console.log(a); //gives undefined.
//In previous versions of the language, variables were declared using the var keyword.

//assign values to varibale
let b;
b = 3.14;
console.log(b);

//declaring  a constant variable
/*
If the initial value of a variable won’t ever change during the rest of program execution, 
this variable is called a constant. This constantness can be enforced by using the keyword const instead of let 
to declare it. Thus, the program is more expressive and further attempts to modify the variable can be detected as errors*/
const c = 3.14; // The value of a cannot be modified
//c = 6.28; // Impossible!

//increment a number variable
let d = 0; // b contains 0
d += 1; // b contains 1
d++; // b contains 2
console.log(d); // Shows 2

//variable scope
let num1 = 0;
{
  num1 = 1; // OK : num1 is declared in the parent block
  const num2 = 0;
}
console.log(num1); // OK : num1 is declared in the current block
//console.log(num2); // Error! num2 is not visible here
