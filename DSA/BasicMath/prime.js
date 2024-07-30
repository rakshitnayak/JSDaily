function checkPrime(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      cnt = cnt + 1;
      if (n / i !== i) {
        cnt = cnt + 1;
      }
    }
  }
  if (cnt === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPrime(13));
console.log(checkPrime(22));
