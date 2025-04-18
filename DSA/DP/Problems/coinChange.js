/**You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 
Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

function coinChange(coins, amount) {
  const memo = {};
  const helper = (coins, amount) => {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minCount = Infinity;

    for (const coin of coins) {
      const recentCount = helper(coins, amount - coin);
      if (recentCount !== -1) {
        minCount = Math.min(minCount, recentCount + 1);
      }
    }
    memo[amount] = minCount === Infinity ? -1 : minCount;
    return memo[amount];
  };

  return helper(coins, amount);
}
console.log(coinChange([1, 2, 5], 11));
