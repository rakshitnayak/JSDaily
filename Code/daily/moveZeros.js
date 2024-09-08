var moveZeroes = function (nums) {
  let left=0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]!==0){
        nums[left]=nums[i];
        left++;
    }
  }

  while(left<nums.length){
    nums[left]=0;
    left++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
