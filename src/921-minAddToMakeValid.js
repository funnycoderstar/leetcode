/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let stack = [];
    let result = 0;
    for(let i = 0; i < S.length; i++) {
        if(S[i] == '(') {
            stack.push(S[i]);
        } else{
            if (stack.length > 0) {
                stack.pop();
            } else {
                result++;
            }
        }
    }
    return result + stack.length;
};
console.log(minAddToMakeValid("((("));