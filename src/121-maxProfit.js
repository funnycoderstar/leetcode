/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let temp = 0;
    let result = 0;
    for(let i = 1; i < prices.length; i++) {
        temp = prices[i] - prices[i - 1 ];
        console.log();
        if(temp > 0) {
            result += temp;
        }
    }
    return result;

};
console.log(maxProfit([7,1,5,3,6,4]));