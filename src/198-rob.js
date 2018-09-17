/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <=1) {
        return nums[0] || 0;
    }
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[nums.length - 1];
};
console.log(rob([2,7,9,3,1]));