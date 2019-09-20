## [1094. 拼车](https://leetcode-cn.com/contest/weekly-contest-142/problems/car-pooling/)

## 思路

```js
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    if(trips.length <= 0) {
        return false;
    }
    trips.sort((x, y) => {
        return x[1] - y[1];
    })
    let allNums = trips[0][0];
    let current = [{
        num: trips[0][0],
        value: trips[0][2]
    }
    ];
    for (let i = 1; i < trips.length; i++) {
        // 要下车的人
        let temp = current.filter(item => item.value <= trips[i][1]);
        if (temp.length > 0) {
            let aaa = 0;
            for(let j = 0; j < temp.length; j++) {
                aaa+=temp[j].num;
            }
            allNums -= aaa;
            current = current.filter(item => item.value > trips[i][1]);
        }
        allNums += trips[i][0];
        current.push({
            num: trips[i][0],
            value: trips[i][2],
        });
        if(allNums > capacity) {
            return false;
        }
    }
    return true;
};
```