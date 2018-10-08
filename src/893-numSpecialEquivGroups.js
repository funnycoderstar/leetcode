/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let B = A.concat();
    let sortedArr = [];
    for(let i = 0;i < A.length; i++) {
        sortedArr[i] =  A[i].split('').sort(function(a, b) {
            return a.localeCompare(b);
        }).join('');
    }
    // let temp = sortedArr.filter(item => !B.includes(item))
    // let temp1 = sortedArr.filter(item => B.includes(item))
    const set = new Set(sortedArr)
    return set.size;
};
console.log(numSpecialEquivGroups(["aa","bb","ab","ba"]));