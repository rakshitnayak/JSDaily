function sumOfNum(n) {
  if (n === 1) {
    return n;
  }

  return n + sumOfNum(n - 1);
}

console.log(sumOfNum(20));
