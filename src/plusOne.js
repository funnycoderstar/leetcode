/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const length = digits.length;
    for(let i = length -1; i >=0; --i) {
        if(digits[i] < 9) {
            ++digits[i];
            return digits;
        }
        digits[i] = 0;
    }
    let res = [1];
    return res.concat(digits);
};
console.log(plusOne([4,3,2,9]));