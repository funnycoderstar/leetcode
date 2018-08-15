/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("");
    b = b.split("");
    if (a.length < b.length) {
        var temp = a;
        a = b;
        b = temp;
    }
    var carry = 0;
    for (var i = a.length - 1, j = b.length - 1; j >= 0; i--, j--) {
        var bit = parseInt(a[i]) + parseInt(b[j]) + carry;
        a[i] = (bit & 1);
        carry = (bit >> 1);
    }
    for (; i >= 0 && carry !== 0; i--) {
        var bit = parseInt(a[i]) + carry;
        a[i] = (bit & 1);
        carry = (bit >> 1);
    }
    if (carry !== 0) {
        return carry + a.join("");
    }
    return a.join("");
};
console.log(addBinary(
    "1",
"111")
);