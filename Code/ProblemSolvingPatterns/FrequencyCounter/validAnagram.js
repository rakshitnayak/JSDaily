/*

Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (const char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (const char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
