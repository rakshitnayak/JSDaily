/*
Promises in JS
Promises are a JavaScript feature that provides a more structured and readable way to work with asynchronous code. 
They represent the eventual completion or failure of an asynchronous operation, 
allowing you to handle the result or error in a more organized and manageable manner.


### **Key Characteristics of Promises:**

1. **Asynchronous Operations:**
    - Promises are commonly used to handle asynchronous operations, such as fetching data from a server, reading a file, 
    or executing a timer.
2. **States:**
    - A promise can be in one of three states:
        - **Pending:** The initial state, before the promise is resolved or rejected.
        - **Fulfilled (Resolved):** The operation completed successfully, and the promise has a resulting value.
        - **Rejected:** There was an error during the operation, and the promise has a reason for the failure.
3. **Chaining:**
    - Promises support chaining through the **`then`** method, allowing you to sequence asynchronous operations in a readable manner.
4. **Error Handling:**
    - Promises have built-in error handling through the **`catch`** method, making it easier to manage and propagate 
    errors in asynchronous code.
 
 
example : 

const fs = require("fs");

function kiratsReadFile() {
// note, make sure a.txt file is present while testing
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

kiratsReadFile().then(onDone);


Creating a promise:
- A promise represents the eventual completion or failure of an asynchronous operation.
- The Promise constructor takes a function with two parameters: resolve and reject

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  // If successful, call resolve with the result
  // If there's an error, call reject with the error
});


Resolving a Promise: Use the resolve function when the asynchronous operation is successful.


const successfulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operation succeeded!');
  }, 1000);
});

Rejecting a Promise: Use the reject function when there's an error during the asynchronous operation.

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Operation failed!');
  }, 1000);
});


 */
