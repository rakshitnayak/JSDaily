// leetcode 567

function arraysEqual(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

var checkInclusion = function (s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;

  const s1ArrayFrequency = Array(26).fill(0);
  const s2ArrayFrequency = Array(26).fill(0);

  for (let i = 0; i < n1; i++) {
    s1ArrayFrequency[s1.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < n2; i++) {
    s2ArrayFrequency[s2.charCodeAt(i) - 97]++;

    if (i >= n1) {
      s2ArrayFrequency[s2.charCodeAt(i - n1) - 97]--;
    }

    if (arraysEqual(s1ArrayFrequency, s2ArrayFrequency)) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
