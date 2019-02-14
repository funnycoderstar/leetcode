/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
   let cur = K;
   let result = [];
   for(let i = A.length - 1; i >= 0 || cur > 0; i--) {
      if(i >= 0) {
            cur += A[i];
        }
        const value = cur % 10;
        result.unshift(value);
        cur = (cur - value) /10;
    }
    return result;
};
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));
