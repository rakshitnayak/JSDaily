function countDigits(N) {
  let count = 0;
  let digit = N;
  while (digit > 0) {
    const ld = digit % 10;
    if (ld !== 0 && N % ld === 0) {
      count++;
    }
    digit = Math.floor(digit / 10);
  }
  return count;
}

console.log(countDigits(12));
