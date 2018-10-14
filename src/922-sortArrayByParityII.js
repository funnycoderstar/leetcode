
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let j = 1;
    for(let i = 0; i < A.length;) {
        if(i % 2 == A[i] % 2 ) {
            i++;
            if(j === i) {
                j++;
            }
            continue;
        }
        [A[i], A[j]] = [A[j], A[i]];
        j++;
    }
    return A;
};
console.log(sortArrayByParityII([3,1,4,2]));