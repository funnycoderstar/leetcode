/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k ) {
            return true;
        } else {
            map.set(nums[i], i);
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1,0,1,1], 1));