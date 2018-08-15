/**
 * @param {number[]} nums
 * @return {number}
 */
// Given an integer array, find three numbers whose product is maximum and output the maximum product.
var nums = [-4,-3,-2,-1,-60];
var maximumProduct = function (nums) {
    // if(nums.length < 3) {
    //     return;
    // }
    // 正数
    var result = nums.sort(function (a, b) {
        return a - b;
    })
    console.log(result);
    var len = result.length;
    var sum = result[len-1] * result[len-2] * result[len-3];
    console.log(sum);
    return sum;
};
maximumProduct(nums);