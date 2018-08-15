/**
 * @param {number[]} nums
 * @return {number}
 */
const arr = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = function(nums) {
    const len = nums.length;
    if(len === 0) {
        return 0;
    }
    let maxSum = nums[0];
    let curSum = nums[0];
    for(let i = 1; i < len; i++) {
        curSum = curSum < 0 ? nums[i] : nums[i] + curSum;
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};
console.log(maxSubArray([1]));