
var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    let count = 0;
    for(let i = 0; i < this.arr.length; i++) {
        if(this.arr[i] < (t - 3000) ) {
            count++;
        }
    }
    return this.arr.length - count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */
var obj = new RecentCounter();
console.log(obj.ping(642));
console.log(obj.ping(1849));
console.log(obj.ping(4921));
console.log(obj.ping(5936));
console.log(obj.ping(5921));