/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let nums1 = nums.slice();
    // for(let i = 0; i < nums.length; i++) {
    //     nums1.splice(i, 1);
    //     if(!nums1.includes(nums[i])) {
    //         return nums[i];
    //     }else {
    //         nums1 = nums.slice();
    //     }
    // }

    // ^= 两个相同的值 异或等于0，0和一个不为0的值得到不为0的值 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
    let result = 0;
    nums.forEach(el => (result ^= el));
    return result;
};
console.log(singleNumber([4,1,2,1,2]));