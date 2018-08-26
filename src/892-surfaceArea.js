/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j=0; j < grid[i].length; j++) {
        result += (4 * grid[i][j]);
        result += (grid[i][j] > 0) ? 2 : 0;
        result -= (i > 0) ? (2 * Math.min(grid[i-1][j], grid[i][j])) : 0;
        result -= (j > 0) ? (2 * Math.min(grid[i][j-1], grid[i][j])) : 0;
   }
    return result;
};
console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]));