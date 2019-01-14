/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let m = S.length;
    let n = 0;
    let result = [];
    for(let i = 0; i < S.length; i++) {
        if(S[i] == 'I') {
            result.push(n++);
        } else {
            result.push(m--);
        }
    }
    result.push(m);
    return result;
};