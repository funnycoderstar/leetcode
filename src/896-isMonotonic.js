/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length === 1) {
        return true;
    }
    let value = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i+1] - A[i] !== 0) {
            value = A[i+1] - A[i];
            break;
        }
    }
    let j = 0
    for(let i = 0; j < A.length; j++) {
        
    }
    
};
console.log(isMonotonic([1, 1, 0]));