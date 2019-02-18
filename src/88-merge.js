/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    nums1.push(...nums2);
    nums1.sort(function(a, b) {
        return a - b;
    })
};


var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let p = m + n - 1;
    while(j >= 0) {
        if(nums1[i] > nums2[j] && i >= 0) {
            nums1[p] = nums1[i];
            i--;
        } else {
            nums1[p] = nums2[j];
            j--;
        }
        p--;
    }
    return nums1;
};

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    while( i>=0 || j >=0) {
        if(nums1[i] >= nums2[j] || j < 0) {
            nums1[i+j+1] = nums1[i];
            i--;
        } else {
            nums1[i+j+1] = nums2[j];
            j--;
        }
    }
};
