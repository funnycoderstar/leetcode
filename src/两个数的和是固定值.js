const arr = [ 2, 5, 8, 10, 7, ];
const result = 9;
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        const l = result - arr[i];
        if (l === arr[j]) {
            console.log(arr[i], arr[j]);
        }
    }
}