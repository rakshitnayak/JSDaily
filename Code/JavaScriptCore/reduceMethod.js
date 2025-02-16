// unlike map & filter reduce method returns single value instead of an array

/*
The reduce() function in JavaScript is an array method used to process elements and return a single accumulated value. 
It iterates through the array, applying a callback function on each element while maintaining 
an accumulator (a running total or result).

array.reduce(callback(accumulator, currentValue, index, array), initialValue)

Parameters:
1)
callback – A function that runs on each element.
  - accumulator – Stores the accumulated result.
  - currentValue – The current element being processed.
  - index (optional) – The index of the current element.
  - array (optional) – The array being iterated.

2) 
initialValue (optional) – The initial value of the accumulator.

*/

//examples

// sum of numbers
const array1 = [1, 2, 3, 5];
const sum = array1.reduce(function (acc, item) {
  return acc + item;
}, 0);

console.log(sum);

// Finding Maximum Value
const numbers = [10, 5, 8, 20, 3];
const max = numbers.reduce(function (acc, item) {
  return item > acc ? item : acc;
}, numbers[0]);

console.log(max);

// Counting Occurences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurences = fruits.reduce(function (acc, item) {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(occurences);

// Flattening an array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArray = nestedArray.reduce(function (acc, curr) {
  return acc.concat(curr);
}, []);

console.log(flatArray);
