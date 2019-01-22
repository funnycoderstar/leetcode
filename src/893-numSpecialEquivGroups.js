/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let count = {};
    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < A[0].length; j++) {
            if(j % 2 == 0) {
                count[i][0] = (A[i][j]);
            } else {
                count[i][1] = (A[i][j]);
            }
        }
    }
    console.log(count);
};
console.log(numSpecialEquivGroups(["aa","bb","ab","ba"]));