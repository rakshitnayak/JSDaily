// lc : 875

// brute force
var minEatingSpeed = function (piles, h) {
  let k = 1;
  let maxK = Math.max(...piles);
  let sum = 0;

  while (k <= maxK) {
    sum = 0;

    for (let i = 0; i < piles.length; i++) {
      sum += Math.ceil(piles[i] / k);
    }

    if (sum <= h) {
      break;
    }

    k++;
  }

  return k;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));

// binary Search
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let sum = 0;

    for (let p of piles) {
      sum += Math.ceil(p / k);
    }

    if (sum <= h) {
      res = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return res;
};
