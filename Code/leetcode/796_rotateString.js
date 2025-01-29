/** 796. Rotate String **/

var rotateString = function (s, goal) {
  let rotated = s;
  let r = false;
  for (let i = 0; i < s.length; i++) {
    rotated = rotated.slice(1) + rotated[0];
    if (rotated === goal) {
      r = true;
      break;
    }
  }
  return r;
};

console.log(rotateString("abcde", "cdeab"));
