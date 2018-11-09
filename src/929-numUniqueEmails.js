/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    for(let email of emails) {
        const items = email.split('@');
        const domain = items[1];
        const address = items[0].replace(/(\+(\w|\W)+|\.)/g, '');
        set.add( domain + address)

    }
    return set.size;
};