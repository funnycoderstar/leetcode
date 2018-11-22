/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const compareFn = function (s1, s2) {
        const s1Content = s1.slice(s1.indexOf(' ') + 1);
        const s2Content = s2.slice(s2.indexOf(' ') + 1);
        return s1Content > s2Content ? 1 : -1;
    };
    let stringLog = [];
    let numberLog = [];
    for (let log of logs) {
        if (log[log.indexOf(' ') + 1].charCodeAt() < 97) {
            numberLog.push(log);
        } else {
            stringLog.push(log);
        }
    }
    stringLog.sort(compareFn);
    return stringLog.concat(numberLog);
};