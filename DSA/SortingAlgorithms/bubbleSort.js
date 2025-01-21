/**  Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
The process is repeated until the list is sorted. */

function bubbleSort(array) {
  let isSwap;

  do {
    isSwap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);

  return array;
}

console.log(bubbleSort([14, 5, 1, 2, 7]));
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
