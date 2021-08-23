/**
 * @param {number[]} nums
 * @return {number[]}
 * 乘积 = 当前数左边的乘积 * 当前数右边的乘积
 * 时间复杂度 o(2n), 常数可以忽略不计，除去返回的数组不计，空间复杂度为 o(1)
 */
var productExceptSelf = function(nums) {
    let result = [];
    let k = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = k;
        k = k * nums[i]; // 此时数组存储的是除去当前元素左边元素的乘积
    }
    k = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= k; // k为该数右边的乘积。
        k *= nums[i]; // 此时数组等于左边的 * 该数右边的。
    }
    return result;
};

console.log(productExceptSelf([1, 2 ,3 ,4]));