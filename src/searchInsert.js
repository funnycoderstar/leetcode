/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        return nums.filter(item => item < target).length;
    }
};