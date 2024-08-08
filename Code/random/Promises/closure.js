// #1
function outer(x) {
  return function (y) {
    return x + y;
  };
}

const result = outer(5);
// console.log(result(5)); //10

// #2
const getValue = () => {
  let score = 10;
  return () => ++score;
};

const v = getValue();
// console.log(v()); // 11
// console.log(v()); // 12
// console.log(v()); // 13

// #3
const getValue2 = () => {
  let score = 10;
  return () => score++;
};

const v2 = getValue2();
// console.log(v2()); // 10
// console.log(v2()); // 11
// console.log(v2()); // 12
