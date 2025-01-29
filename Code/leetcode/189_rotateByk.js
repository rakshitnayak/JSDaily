// 189. Rotate Array
var rotate = function (nums, k) {
  k %= nums.length;
  const reverse = (left, right) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
