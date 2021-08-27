//while loop
/*
A while loop lets you repeat code while a certain condition is true. 

while (condition) {
  // Code to run while the condition is true
}
Before each loop iteration, the condition in parentheses is evaluated to determine whether it’s true or not. 
The code associated with a loop is called its body.

-> If the condition’s value is true, the code in the while loop’s body runs. Afterwards, 
the condition is re-evaluated to see if it’s still true or not. The cycle continues!
-> If the condition’s value is false, the code in the loop stops running or doesn’t run.

*/
let number1 = 1;
while (number1 <= 5) {
  console.log(number1);
  number1++;
}

//for loop
/*
-> Initialization only happens once, when the code first kicks off. It’s often used to set the initial value of 
the variable associated to the loop condition.
-> The condition is evaluated once before the loop runs each time. If it’s true, the code runs. 
If not, the code doesn’t run.
-> The final expression is evaluated after the loop runs each time. 
It’s often used to update the value of the variable associated with the loop condition.


for (initialization; condition; final expression) {
  // code to run while the condition is true
}
*/
let number2;
for (number2 = 1; number2 <= 5; number2++) {
  console.log(number2);
}

/*
common mistakes

(infinite loops)
let number = 1;
while (number <= 5) {
  console.log(number);
  // The number variable is never updated: the loop condition stays true forever
}
The main risk with while loops is producing an infinite loop, meaning the condition is always true, 
and the code runs forever.


(Manipulating a "for loop")
for (let i = 1; i <= 5; i++) {
  console.log(i);
  i++; // The i variable is updated in the loop body
}
Each time the loop runs, the counter variable is incremented twice: once in the body and once in the 
final expression after the loop runs. 

*/
