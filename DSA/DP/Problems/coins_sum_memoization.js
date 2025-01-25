/**

coin change problem : where you need to determine if its possible to form a specific amount using any combination
of elemetnts from a given set, which can be used an unlimited number of times

sumPossible(8, [5,12,4]) - true
sumPossible(103, [6,20,1])- true
sumPossible(8, [5,3,4]) - true
sumPossible(15, [4,6,10])- false

*/

function sumPossible(amount, nums, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (const num of nums) {
    if (sumPossible(amount - num, nums, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

console.log(sumPossible(8, [5, 12, 4])); // true
// console.log(sumPossible(103, [6, 20, 1])); //true
// console.log(sumPossible(8, [5, 3, 4])); // true
// console.log(sumPossible(15, [4, 6, 10])); //false
