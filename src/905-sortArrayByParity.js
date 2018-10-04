/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    for(let i = 0; i < A.length; i++) {
        if(A[i]%2 == 0){
            let t = A.splice(i,1);
            A.unshift(t[0]);
        }
    }
    return A;
};