function printSumOfDivisors(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum = sum + i * Math.floor(N / i);
  }
  return sum;
}

console.log(printSumOfDivisors(4));
