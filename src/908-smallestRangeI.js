/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = Math.min.apply( Math, A );
    let max = Math.max.apply( Math, A );
    let range = max - min;
    let times = 2;
    while(times > 0) {
        if(range > 0) {
            if(range > K) {
                range -= K
            } else {
                range = 0;
            }
        }
        times--;
    }
    return range;
};
