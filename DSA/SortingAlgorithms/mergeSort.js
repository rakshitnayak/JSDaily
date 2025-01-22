/** Merge Sort is a divide-and-conquer sorting algorithm that splits an array into smaller sub-arrays, sorts those sub-arrays,
and then merges them back together in sorted order.
It is one of the most efficient general-purpose sorting algorithms and works well with both small and large datasets. */

function merge(left, right) {
  let leftBox = 0;
  let rightBox = 0;
  let result = [];

  while (leftBox < left.length && rightBox < right.length) {
    if (left[leftBox] < right[rightBox]) {
      result.push(left[leftBox]);
      leftBox++;
    } else {
      result.push(right[rightBox]);
      rightBox++;
    }
  }

  while (leftBox < left.length) {
    result.push(left[leftBox]);
    leftBox++;
  }

  while (rightBox < right.length) {
    result.push(right[rightBox]);
    rightBox++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([12, 11, 13, 5, 6]));
