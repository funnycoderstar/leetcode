/**
 * @param {number} n
 * @return {string}
 */
let map = new Map();
map.set(1, '1');
map.set(2, '11');
map.set(3, '21');
map.set(4, '1211');
map.set(5, '111221');
var countAndSay = function(n) {
    if(n <=5) {
        return map.get(n);
    }
    while(n > 5) {
        if(map.has(n)) {
            return map.get(n);
        } else if(map.has(n-1)){
            let str = map.get(n-1);
            let repeatCount = 1; // 重复的次数
            let resultStr = '';
            for(let i = 0; i < str.length; i++) {
                if(str[i] === str[i+1]) {
                    repeatCount++;
                } else {
                    resultStr += `${repeatCount}${str[i]}`;
                    repeatCount = 1;
                }
            }
            map.set(n, resultStr);
            return resultStr;
        } else {
            countAndSay(n-1);
        }
    }
    
};
console.log(countAndSay(6));