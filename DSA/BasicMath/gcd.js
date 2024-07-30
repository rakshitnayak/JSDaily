// Brute force approach
function findGcd(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(findGcd(15, 20));

// slightly better approach
function findGcd1(n1, n2) {
  for (let i = Math.min(n1, n2); i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
  return 1;
}

console.log(findGcd1(9, 12));

// Euclidean algorithm
// gcd(n1, n2)= gcd(n1-n2, n2) where n1>n2;
// gcd(a,b) = gcd(a%b , b);
function findGcd2(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a === 0) {
    return b;
  }
  return a;
}

// Time complixty = O(logPhi(min(a,b)))

console.log(findGcd2(20, 40));
