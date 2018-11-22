/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let j = 0;
    for (let i = 0; i < typed.length; i++) {
        if (j < name.length && typed[i] === name[j]) {
            j++;
        } else {
            if (i > 0 && typed[i] === typed[i - 1]) {
                continue;
            } else {
                return false;
            }
        }
    }
    return j === name.length;
};