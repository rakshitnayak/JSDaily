function isPalindrome(n) {
  let revNum = 0;
  let dup = n;
  while (n > 0) {
    let ld = n % 10;
    revNum = revNum * 10 + ld;
    n = Math.floor(n / 10);
  }

  if (revNum == dup) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(-424));
