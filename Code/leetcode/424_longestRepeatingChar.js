// leetcode 424

/*You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

function longestRepatingChar(str, k) {
  let res = 0;
  let charCounts = new Map();

  let l = 0;
  maxF = 0;

  for (let r = 0; r < str.length; r++) {
    charCounts.set(str[r], (charCounts.get(str[r]) || 0) + 1);
    maxF = Math.max(maxF, charCounts.get(str[r]));

    const windowLength = r - l + 1;
    if (windowLength - maxF > k) {
      charCounts.set(str[l], charCounts.get(str[l]) - 1);
      l++;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(longestRepatingChar("AABABBA", 1));
