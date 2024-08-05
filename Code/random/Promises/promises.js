// Create a Promise and resolve it immediately.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

promise.then((res) => {
  console.log(res);
});

// Create a function that returns a Promise and resolve when calling the function.

const getPromise = (n) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Done"), n);
  });
};

getPromise(5000).then((result) => console.log(result));
