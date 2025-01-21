/**Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one item at a time. 
 It is much like sorting playing cards in your hands. The algorithm divides the array into a "sorted" and an "unsorted" part. 
 Values from the unsorted part are picked and placed at the correct position in the sorted part.
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
