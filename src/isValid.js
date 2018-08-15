/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
    '}': '{',
    ']': '[',
    ')': '(',
};
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else if(stack.pop() != map[s[i]]){
            return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid('{}'));