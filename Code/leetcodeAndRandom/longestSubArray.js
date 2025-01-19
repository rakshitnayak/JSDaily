/**
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
**/

var longestSubarray = function (nums) {
  let left = 0;
  let del = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      del++;
    }

    while (del > 1) {
      if (nums[left] === 0) {
        del--;
      }
      left++;
    }

    if (del === 1) {
      maxLen = Math.max(maxLen, right - left);
    }
  }

  return del === 0 ? nums.length - 1 : maxLen;
};

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
