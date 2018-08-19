/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function getSum(total, num) {
    return total + num;
}
var fairCandySwap = function(A, B) {
    let sumA = A.reduce(getSum);
    let sumB = B.reduce(getSum);
    for(let x of A) {
        if(B.includes(x + (sumB - sumA)/2)) {
            return [x, x +  (sumB - sumA)/2]
        }
    }
};

// var fairCandySwap = function(A, B) {
//     let a = A.concat();
//     let b = B.concat();
//     for(let i = 0; i < A.length; i++) {
//         for(let j = 0; j < B.length; j++) {
//             a.splice(i, 1, B[j]);
//             b.splice(j, 1, A[i]);
//             if(a.reduce(getSum) == b.reduce(getSum)) {
//                 return [A[i], B[j]];
//             } else {
//                 a = A.concat();
//                 b = B.concat();
//             }
//         }
//     }
// };

console.log(fairCandySwap([1,1], [2,2]));