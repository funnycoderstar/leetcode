/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// var wordPattern = function(pattern, str) {
//     const patternArr = pattern.split('');
//     const strArr = str.split(' ');
//     if(patternArr.length !== strArr.length) {
//         return false;
//     } else {
//         let obj1 = {};
//         let obj2 = {};
//         for (let i = 0; i < patternArr.length; i++) {
//             if(obj1[patternArr[i]]) {
//                 obj1[patternArr[i]].push(i);
//             } else {
//                 obj1[patternArr[i]] = [i];
//             }
//             if(obj2[strArr[i]]) {
//                 obj2[strArr[i]].push(i);
//             } else {
//                 obj2[strArr[i]] = [i];
//             }
//         }
//         return JSON.stringify(Object.values(obj1)) == JSON.stringify(Object.values(obj2))
        
//     }

// };
var wordPattern = function(pattern, str) {
    var strArray = str.split(' ');
    if (pattern.length !== strArray.length) {
        return false;
    }
    var length = pattern.length;
    var map = {};
    for(var i = 0; i < length; i++) {
        var ch = pattern[i];
        if (ch in map) {
            if (map[ch] !== strArray[i]) {
                return false;
            }
        } else {
            for (var key in map) {
                if (strArray[i] === map[key]) {
                    return false;
                }
            }
            map[ch] = strArray[i];
        }
    }
    console.log(map);
    return true;
};
console.log(wordPattern('abba', 'dog cat cat d0g'));