function armStrong(n) {
  let sum = 0;
  const dup = n;
  while (n > 0) {
    let ld = n % 10;
    sum = sum + ld * ld * ld;
    n = Math.floor(n / 10);
  }
  if (sum === dup) {
    return true;
  } else {
    return false;
  }
}

console.log(armStrong(371));
console.log(armStrong(153));
console.log(armStrong(85));
