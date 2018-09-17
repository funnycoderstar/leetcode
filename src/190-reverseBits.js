/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let a = n.toString(2);
    let str = '0';
    let b = str.repeat(32 - a.length) + a;
    return parseInt(b.split('').reverse().join(''), 2);
};
console.log(reverseBits(43261596));