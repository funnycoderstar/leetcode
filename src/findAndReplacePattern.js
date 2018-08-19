/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var wordPattern = function(pattern, str) {
    var strArray = str.split('');
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
    return true;
};
var findAndReplacePattern = function(words, pattern) {
    let arr = [];
    for(let i = 0; i < words.length; i++) {
        if(wordPattern(pattern, words[i])) {
            arr.push(words[i]);
        }
    }
    return arr;
};
let words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb";
console.log(findAndReplacePattern(words, pattern));