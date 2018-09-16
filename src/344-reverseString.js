/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let strLen = s.length;
    let i = strLen -1;
    let strArr = [];
    for(; i >=0; i--) {
        strArr.push(s[i]);
    }
    return strArr.join('');
};
console.log(reverseString('A man, a plan, a canal: Panama'));