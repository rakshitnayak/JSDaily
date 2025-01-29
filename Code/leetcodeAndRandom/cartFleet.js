// 853. Car Fleet

var carFleet = function (target, position, speed) {
  //create pair of pos and speed
  let pair = position.map((p, i) => [p, speed[i]]);

  //sort in desc
  pair.sort((a, b) => b[0] - a[0]);
  let stack = [];
  for (let [p, s] of pair) {
    const timeTaken = (target - p) / s;
    stack.push(timeTaken);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
