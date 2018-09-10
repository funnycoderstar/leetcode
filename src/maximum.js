/**
 * @param {number[]} nums
 * @return {number}
 */
// Given an integer array, find three numbers whose product is maximum and output the maximum product.
var nums = [-4,-3,-2,-1,-60];
var maximumProduct = function (nums) {
    var result = nums.sort(function (a, b) {
        return a - b;
    })
    var len = result.length;
    var sum = result[len-1] * result[len-2] * result[len-3];
    return sum;
};
maximumProduct(nums);