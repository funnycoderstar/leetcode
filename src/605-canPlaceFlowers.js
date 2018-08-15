/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let len = flowerbed.length;
    for(let i = 0; i < len; i++) {
        // 判断当前是否为0，如果为0，且左右相邻均为0则可以种花，种花后修改花盆属性和种花数量
        if(flowerbed[i] == 0) {
            const left = (i == 0) ? 0 : flowerbed[i - 1];
            const right = (i == len - 1) ? 0 : flowerbed[i + 1];
            if(left == right && right == 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
        if(count >= n) {
            return true;
        }
    }
    return false;
};
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));