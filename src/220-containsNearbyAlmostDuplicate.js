/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        if(map.has(t - nums[i]) ) {
            if(map.get(t - nums[i]) - index <= k) {
                return true;
            }
            return false;
        } else {
            map.set(nums[i], i);
        }
    }
    return false;
};
console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));