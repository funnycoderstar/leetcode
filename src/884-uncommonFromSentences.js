/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

// 方法一: 暴力解决法
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function checkout(paramA, arrB, A) {
    let arrA = paramA.concat();
    let result = [];
    for(let i = 0; i < arrA.length; i++) {
        let a = arrA[i];
        arrA.splice(i, 1);
        if(!arrA.includes(a) && !arrB.includes(a) ) {
            result.push(a);
        }
        arrA = paramA.concat();
    }
    return result;
}
var uncommonFromSentences = function(A, B) {
    let arrA = A.split(' ');
    let arrB = B.split(' ');
    return checkout(arrA, arrB, A).concat(checkout(arrB, arrA, B));
};
// 方法二
var uncommonFromSentences = function(A, B) {
    let map = new Map();
    A.split(' ').concat(B.split(' ')).forEach(item => {
        if(map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    });
    let result = [];
    map.forEach((value, key, map) => {
        if(value == 1) {
            result.push(key);
        }
    })
    return result;
};