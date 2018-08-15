/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const intToStr = x.toString();
    for(let i = 0; i < intToStr.length; i++) {
        if(intToStr[i] !== intToStr[intToStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};