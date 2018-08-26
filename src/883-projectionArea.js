/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let hans = 0;
    let lans = 0;
    let rans = 0;
    for(let i = 0;i < grid.length; i++) {
        let maxl = 0;
        let maxr = 0;
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] > 0) {
                hans++;
            }
            maxl = Math.max(maxl, grid[i][j]);
            maxr = Math.max(maxr, grid[j][i]);
        }
        lans+=maxl;
        rans+=maxr;
    }
    return lans+rans+hans;
};
// 参考 https://blog.csdn.net/qq_30216191/article/details/81811146