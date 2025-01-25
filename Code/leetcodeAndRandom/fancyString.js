// 1957. Delete Characters to Make Fancy String
/**
Example 1:

Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".
Example 2:

Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".
Example 3:

Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab". */

function fancyString(s) {
  if (s.length === 1) return s;
  let result = s[0];
  for (let i = 1; i < s.length; i++) {
    if (!(s[i - 1] === s[i] && s[i] === s[i + 1])) {
      result += s[i];
    }
  }

  return result;
}

console.log(fancyString("aaabaaaa"));
