/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    for(let i = 0; i < deck.length; i++) {
        if(map.has(deck[i])) {
            let value = map.get(deck[i]) + 1;
            map.set(deck[i], value);
        } else {
            map.set(deck[i], 1);
        }
    }
    let values = [...map.values()];
    let min = Math.min.apply( Math, values );
    if(min < 2) {
        return false;
    } else {
        for(let j = 2; j <= min; j++) {
            let i = 0;
            for(i; i < values.length; i++) {
                if(values[i] % j != 0) {
                    break;
                }
            }
            if(i === values.length) {
                return true;
            }
        }
    }
    return false;
};
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])); // true