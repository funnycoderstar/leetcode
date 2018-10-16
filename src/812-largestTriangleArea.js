/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = 0;
    for(let x of points) {
        for(let y of points) {
            for(let z of points) {
                max = Math.max(max, 0.5 * Math.abs(x[0] * y[1] + y[0] * z[1] + z[0] * x[1] - x[0] * z[1] - y[0] * x[1] - z[0] * y[1]))
            }
        }
    }
    return max;
};