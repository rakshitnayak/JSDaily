function twoSum(arr, target) {
  const obj = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    const result = [];

    if (obj.has(complement)) {
      result.push(obj.get(complement), i);
    }

    console.log(obj);

    obj.set(arr[i], i);
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
