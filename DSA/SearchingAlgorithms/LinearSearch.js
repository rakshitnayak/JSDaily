// unordered linear search | TimeComplexity O(n), spaceComplexity O(1)
function unorderedLinearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(unorderedLinearSearch([30, 50, 20, 15, 10], 20));

// ordered linear search | TimeComplexity O(n), spaceComplexity O(1)
function orderedLinearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === value) return i;
    else if (arr[i] > value) return -1;
  }
  return -1;
}

console.log(orderedLinearSearch([10, 20, 30, 90, 50], 70));
