//const name = prompt("Enter your first name:");
//alert(`Hello, ${name}`);
/*  during execution , a dialog box pops up asking for your name
note: try it in browser console

The value you entered in the first dialog box has been stored as a string in the variable name.
The JavaScript command alert() then triggered the display of the second box, 
containing the result of the concatenation of the string "Hello, " with the value of the name variable.
*/

//displaying info
/*

Both console.log() (encountered in the previous chapter) and alert() can be used to display information to the user.
 Unlike alert(), console.log() does not stop program execution and is often a better choice.

*/
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // Show "36.9 37.6 37.1"

//entering  a number
/*Regardless of the entered data, the prompt() command always returns a string value. 
If this value is to be used in numerical expressions, it must be converted into a number with the Number() command.
const input = prompt("Enter a number:"); // input's type is string
const nb = Number(input); // nb's type is number

Both operations can be combined in one line for the same result.
const nb = Number(prompt("Enter a number:")); // nb's type is number
*/
