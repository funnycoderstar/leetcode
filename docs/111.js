
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    
    bookings.sort((x, y) => {
        return x[0] - y[0];
    })
    let result =  new Array(n).fill(0);
    let k = 0;
    for(let i = 1; i <= result.length; i++) {
        for(let j = k; j < bookings.length; j++) {
            if(bookings[j][0] > i && bookings[j][1] < i) {
                k = j + 1;
                break;
            }
            if(bookings[j][0] == i || (bookings[j][0] < i && bookings[j][1] >= i)) {
                result[i-1]+= bookings[j][2];
            }
        }
    }
    return result;
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));
