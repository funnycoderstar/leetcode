/**
 * @param {number} n
 * @return {boolean}
 */
function computedSum(n) {
    return n.toString().split('').map(item => parseInt(item)).reduce((accumulator, currentValue) => {
        return accumulator + Math.pow(currentValue, 2);
     }, 0)
}
var isHappy = function(n) {
    let temp = [];
    function d(m) {
        let a = computedSum(m);
        if( a == 1) {
            return true;
        } else if(temp.includes(a)){
            return false;
        } else {
            temp.push(a);
            return d(a)
        }
    }
    return d(n);
};
console.log(isHappy(13));
