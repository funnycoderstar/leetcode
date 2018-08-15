/**
 * @param {string}
 * @return {number}
 */
let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'undefined': 0,
}
var romanToInt = function(s) {
    const arr = s.split('');
    let sum = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === 'V' || arr[i] === 'X') {
            if(arr[i-1] === 'I') {
                sum = sum - 2 * obj[arr[i-1]] + obj[arr[i]];
            } else {
                sum = sum + obj[arr[i]];
            }
            
        } else if(arr[i] === 'L' || arr[i] === 'C') {
            if(arr[i-1] === 'X') {
                sum = sum - 2 * obj[arr[i-1]] + obj[arr[i]];
            } else {
                sum = sum + obj[arr[i]];
            }

        } else if(arr[i] === 'D' || arr[i] === 'M' ) {
            if(arr[i-1] === 'C') {
                sum = sum - 2 * obj[arr[i-1]] + obj[arr[i]];
            } else {
                sum = sum + obj[arr[i]];
            }
        } else {
            sum = sum + obj[arr[i]];
        }
    }
    return sum;
};