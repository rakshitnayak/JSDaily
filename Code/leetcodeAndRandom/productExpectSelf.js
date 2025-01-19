var productExceptSelf = function (nums) {
  let length = nums.length;

  let left = new Array(length).fill(1);
  let right = new Array(length).fill(1);

  let answer = new Array(length);

  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i - 1], "*", left[i - 1], "num of i");
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    console.log(nums[i + 1], "*", right[i + 1], "num of i");
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));

/**
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]


Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 */
