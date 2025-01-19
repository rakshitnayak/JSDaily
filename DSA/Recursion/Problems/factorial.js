function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function factorial1(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(3));
console.log(factorial(5));

console.log(factorial1(3));
/*

In short, a factorial is a function that multiplies a number by every 
number below it till 1. For example, the factorial of 3 represents the 
multiplication of numbers 3, 2, 1, i.e. 3! = 3 × 2 × 1 and is equal to 6 

*/
