/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let result = new Array(num_people).fill(0);
    
    let i = 0;
    let cur = 1;
    while(candies > 0) {
        result[i] += Math.min(candies, cur);
        candies -= cur;
        cur++;
        i++;
        if( i == result.length) {
            i = 0;
        }
    }
    return result;
};
console.log(distributeCandies(7, 4)); // [ 1, 2, 3, 1 ]
console.log(distributeCandies(10, 3)); // [5, 2, 3]
console.log(distributeCandies(100, 2)); // 

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    
};



