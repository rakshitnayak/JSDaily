/* Quick sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to sort elements. 
Here's a step-by-step explanation and an example in JavaScript:

Explanation:
Choose a Pivot: Select an element from the array as the pivot. This can be any element, but commonly the first, last, or middle element is chosen.

Partition the Array: Rearrange the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. 
The pivot element will be in its final sorted position. 

Recursively Apply: Apply the same process to the sub-arrays of elements with smaller values and 
elements with greater values. **/

// ignore the big

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // final swap of pivot & ith value
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 10])); // [1, 2, 3, 4, 5, 7, 8, 10]
