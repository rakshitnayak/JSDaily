// iterative approach
function countAllOccur(array, key) {
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === key) {
      count++;
    }
  }
  return count;
}

console.log(countAllOccur([1, 2, 3, 4, 5, 2, 2, 2, 2], 2));

// recursive apporach
function recursiveCountAllOccur(array, key, index = 0) {
  if (index > array.length) {
    return 0;
  }

  return (
    (array[index] === key ? 1 : 0) +
    recursiveCountAllOccur(array, key, index + 1)
  );
}

console.log(recursiveCountAllOccur([1, 2, 3, 4, 5, 2, 2, 2, 2], 2));
