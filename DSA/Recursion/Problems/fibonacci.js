// iterative apporach
function nthFibonacci(n) {
  if (n <= 1) return n;

  let curr = 0;
  let prev1 = 1;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
}

let result = nthFibonacci(8);
console.log(result);

// recusive approach

function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(recursiveFibonacci(8));
