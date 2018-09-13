/**
 * @param {number[]} A
 * @return {number}
 */
// 方法一
var peakIndexInMountainArray = function(A) {
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i] > A[i+1]) {
            return i;
        }
    }
    
};
// 方法二
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max.apply(null, A));
};
console.log(peakIndexInMountainArray([0,1,0]));   