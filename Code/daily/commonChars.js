var commonChars = function (words) {
  const charMaps = [];
  const result = [];

  for (let word of words) {
    const map = new Map();
    for (let char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    charMaps.push(map);
  }

  const minFreqMap = new Map();

  for (let [char] of charMaps[0]) {
    let minFreq = charMaps[0].get(char);
    for (let i = 1; i < charMaps.length; i++) {
      if (!charMaps[i].has(char)) {
        minFreq = 0;
        break;
      }
      minFreq = Math.min(minFreq, charMaps[i].get(char));
    }
    if (minFreq > 0) {
      minFreqMap.set(char, minFreq);
    }
  }

  for (let [char, freq] of minFreqMap) {
    for (let i = 0; i < freq; i++) {
      result.push(char);
    }
  }

  return result;
};

console.log(
  commonChars([
    "acabcddd",
    "bcbdbcbd",
    "baddbadb",
    "cbdddcac",
    "aacbcccd",
    "ccccddda",
    "cababaab",
    "addcaccd",
  ])
);
console.log(commonChars(["cool", "lock", "cook"]));
/**
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 */
