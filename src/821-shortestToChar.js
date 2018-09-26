/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let result = [];
    for(let i = 0; i < S.length; i++) {
        let left = S.lastIndexOf(C, i);
        let right = S.indexOf(C, i);
        if(left == -1) {
            result.push(right - i);
        } else if(right == -1) {
            result.push(i - left);
        } else {
            right - i > i - left ? result.push(i - left) : result.push(right - i);
        }
    }
    return result;
};