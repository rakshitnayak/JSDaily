/** 

Javascript is a single threaded , means js can only execute only once task at a time
i.e, Code executes step by step in order so that is nothing a synchronous code execution.

What is Synchronous Code?
When we write a program in JavaScript, it executes line by line. When a line is completely executed, then and then only does 
the code move forward to execute the next line.

Let's look at an example of this:

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
for(let i=0;i<1000000000;i++){
}
console.log(greet_two);

Now if you run the above example on your machine you will notice that greet_one logs first. Then the program waits for a 
couple of seconds and then logs greet_two. This is because the code executes line by line. This is called synchronous code.

This creates lot of problems. For example, if a certain piece of code takes 10 seconds to execute, 
the code after it won't be able to execute until it's finished, causing delays.

*/
