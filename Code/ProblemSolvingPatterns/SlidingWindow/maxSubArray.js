/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

examples:
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
*/

/* Naive approach */

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

/* Better refactored approach O(n)*/

function maxSubarraySumRefactored(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log("Refactored approach --------");
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySumRefactored([4, 2, 1, 6], 1));
console.log(maxSubarraySumRefactored([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySumRefactored([], 4));
