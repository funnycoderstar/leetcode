/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(arr[i] == 0) {
            arr.pop();
            arr.splice(i, 0, 0);
            i+=1;
        }
    }
    console.log(arr);
};
// console.log(duplicateZeros([]));

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
//定义一个函数
function compare(property){
    return function(obj1,obj2){
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value2 - value1;
    }
}

var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    let curSum = 0;
    let curIndex = [];
    let curLable = [];
    let obj = [];
    for(let i = 0; i < values.length; i ++) {
        let v = values[i];
        let l = labels[i];
        obj[i] = {
            value: v,
            label: l,
        };
    }
    obj.sort(compare('value'));
    let labels1 = [];
    let values1 = [];
    for(let i = 0; i < obj.length; i ++) {
        values1.push(obj[i].value);
        labels1.push(obj[i].label);
    }
    for(let i = 0; i < values1.length; i++) {
        curIndex.push(i);
        if(curIndex.length > num_wanted) {
            curIndex.pop();
            continue;
        }
        curLable.push(labels1[i]);
        const tempNum = curLable.filter(item => item === labels1[i]).length;
        if(tempNum > use_limit) {
            curLable.pop();
            curIndex.pop();
            continue;
        }
        curSum += values1[i];
    }
    return curSum;
};
console.log(largestValsFromLabels([3,2,3,2,1],[1,0,2,2,1], 2, 1));
console.log(largestValsFromLabels([2,6,1,2,6],[2,2,2,1,1], 1, 1));
console.log(largestValsFromLabels([9,8,8,7,6],[0,0,0,1,1], 3, 2));
console.log(largestValsFromLabels([9,8,8,7,6],[0,0,0,1,1], 3, 1));
console.log(largestValsFromLabels([5,4,3,2,1],[1,3,3,3,2], 3, 2));
console.log(largestValsFromLabels([5,4,3,2,1],[1,1,2,2,3], 3, 1));