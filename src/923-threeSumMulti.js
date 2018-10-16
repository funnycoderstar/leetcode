/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
    let result = 0;
    const sum = A[0] + A[1];
    let obj = {
       
    };
    obj[1] = {};
    obj[1][A[0] + A[1]] = 1;
    for (let i = 2; i < A.length; i++) {
        obj[i] = {};
        for (let j = i - 1; j > -1; j--) {
            if (obj[j] && obj[j][target - A[i]]) {
                result += obj[j][target - A[i]];
                result %= 1000000007;
            }
            obj[i][A[i] + A[j]] = obj[i][A[i] + A[j]] || 0;
            obj[i][A[i] + A[j]]++;
        }
    }
    return result;
};
console.log(threeSumMulti([0, 0, 0], 0));