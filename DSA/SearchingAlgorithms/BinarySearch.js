// Iterative approach | TimeComplexity : O(logn), spaceComplexity:O(1)
function BinarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(BinarySearch([20, 30, 50, 70, 80, 100], 70));
