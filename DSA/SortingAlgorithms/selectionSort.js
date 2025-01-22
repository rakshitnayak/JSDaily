/**
Selection sort is a simple comparison-based sorting algorithm. 
It divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. 
The algorithm repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted sublist, swapping it with the leftmost unsorted element, 
and moving the sublist boundaries one element to the right.

Explanation:
Initialize: Start with the first element as the minimum.
Find Minimum: Find the smallest element in the unsorted portion of the list.
Swap: Swap the found minimum element with the first element of the unsorted portion.
Repeat: Move the boundary of the sorted and unsorted sublists one element to the right and repeat the process until the entire list is sorted.
*/

// playing with index
function selectionSort(arr) {
  const n = arr.length;

  // One by one move the boundary of the unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted array
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([7, 3, 6, 8, 9]));
