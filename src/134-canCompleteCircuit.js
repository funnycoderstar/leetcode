/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let arr = [];
    for(let i = 0; i < gas.length; i++) {
        if(gas[i] >= cost[i]) {
            arr.push(i);
        }
    }
    if(!arr.length) {
        return -1;
    }
    for(let j = 0; j < arr.length; j++) {
        let a = gas.slice(arr[j]).concat(gas.slice(0, arr[j]));
        let b = cost.slice(arr[j]).concat(cost.slice(0, arr[j]));
        let rest = a[0];
        let count = 0;
        for(let k = 1; k < a.length; k++) {
            rest += (a[k] - b[k-1]);
            if(rest >= b[k]) {
                count++;
            }
        }
        if(count == a.length - 1 && rest >= b[0]) {
            return arr[j];
        }
    }
    return -1;

};
console.log(canCompleteCircuit([2, 3, 4],[3,4,3]));
