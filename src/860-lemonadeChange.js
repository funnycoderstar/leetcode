/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;
    let twenties = 0;
    for(let bill of bills) {
        switch(bill) {
            case 5:
                fives++;
                break;
            case 10:
                if(fives > 0) {
                    fives--;
                    tens++;
                } else {
                    return false;
                }
                break;
            case 20:
                if(fives > 0 && tens > 0) {
                    fives--;
                    tens--;
                    twenties++;
                } else if(fives >= 3) {
                    fives-=3;
                    twenties++;
                } else {
                    return false
                }
                break;
            default:
                break;
        }
    }
    return true;
};