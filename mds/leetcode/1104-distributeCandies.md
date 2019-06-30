## [1104. 分糖果 II](https://leetcode-cn.com/problems/distribute-candies-to-people/)

## 思路

```js
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
```