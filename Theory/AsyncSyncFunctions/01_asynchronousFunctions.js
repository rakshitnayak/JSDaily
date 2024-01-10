/*

Asynchronous code : "Code that takes a bit longer"


What is Asynchronous Code?

With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish. This is what we call 
non-blocking code. The execution of other code won't stop while an asynchronous task finishes its work.


Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()

Let's see an example of asynchronous code:

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two);

In the above example, if you run the code on your machine you will see greet_one and greet_two logged even there is code in 
between those 2 logs. Now, setTimeout is asynchronous so it runs in background, allowing code after it to execute while it runs. 
After 10 seconds, Asynchronous will print because we set a time of 10 seconds in setTimeout to execute it after 10 seconds.



To understand how the execution happens go to this site : http://latentflip.com/loupe/


*/
