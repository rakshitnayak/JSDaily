function shortestBookSeries(books) {
  let indexMap = new Map();
  let minLength = Infinity;

  for (let i = 0; i < books.length; i++) {
    if (indexMap.has(books[i])) {
      minLength = Math.min(minLength, i - indexMap.get(books[i]) + 1);
    }
    indexMap.set(books[i], i);
  }

  return minLength === Infinity ? -1 : minLength;
}

// Example test cases
console.log(shortestBookSeries([5, 1, 9, 5, 6, 2])); // Output: 4
console.log(shortestBookSeries([7, 3, 8, 2])); // Output: -1
