/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    let min0 = 0;
    let min1 = 0;
    for(let i = 0; i < S.length; i++) {
        if(S[i] == 0) {
            min1 = Math.min(min1, min0) + 1;
        } else {
            min1 = Math.min(min1, min0);
            min0 += 1;
        }
    }
    return Math.min(min0, min1);
};

console.log(minFlipsMonoIncr("00110"));
console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));

/**
 *  解题思路： 动态规划问题
    dp[n]: 翻转第n个字符最优解
    dp[n][0]: 第n个字符翻转为0的最优解
    dp[n][1]: 第n个字符翻转为1的最优解

    dp[n][0]
    1. 当前数为0 dp[n][0] = dp[n -1][0]
    2. 当前数为1 dp[n][0] = dp[n -1][0] + 1

    dp[n][1]
    1. 当前数为0 dp[n][1] = min(dp[n -1][0], dp[n-1][1]) + 1 
    2. 当前数为1 dp[n][1] = min(dp[n -1][0], dp[n-1][1])

    min(dp[n][0], dp[n][1])
 */