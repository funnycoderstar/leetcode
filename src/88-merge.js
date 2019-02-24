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


/**
 * 
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 * 从最后一个开始填充
 * 合并后的数组总个数为m+n, 因为是从0开始， 所以nums1和nums2的最后一个索引分别为 m-1, n-1, 合并后的nums1的最后一个元素应该为m+n-1
 * 我们在数组nums1中设p从尾部(即从确定大数开是)开始索引， m和n中的数组中i和j也是从尾部大数开始索引，nums1[i]和nums2[j]比较一下谁大谁就去填补p指引的那个位置， 谁去填补了， i或j就往左移动
 */
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
