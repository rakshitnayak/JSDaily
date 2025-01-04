var validAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookup = {};
  for (char of s) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (char of t) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
