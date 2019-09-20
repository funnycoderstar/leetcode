/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        let value = map.has(s[i]) ?  map.get(s[i]) + 1 : 1;
        map.set(s[i], value);
    }
    let result = 0;
    for (let item of map.values()) {
        if(item >=k) {
            result+=item;
        }
    }
    return result;
};