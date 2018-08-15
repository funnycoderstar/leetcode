/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split('');
    let result = '';
    if(arr[0] == '-') {
        arr.shift();
        result = '-' + arr.reverse().join('');
    } else {
        result = arr.reverse().join('');
    }
    if(Number(result) > (Math.pow(2, 31) -1) || Number(result) < -Math.pow(2, 31)) {
        return 0;
    } else {
        return Number(result);
    }
    
};