function ArrayList() {
    var array = [];
    var swap = function(index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    this.insert = function(item) {
        array.push(item);
    }
    this.toString = function() {
        return array.join();
    }
    // 冒泡排序
    this.bubbleSort = function() {
        let len = array.length;
        for(let i = 0; i < len; i++) {
            for(let j = 0; j < len - 1;j++ ) {
                if(array[j] > array[j+1]) {
                    swap( j, j+1);
                }
            }
        }
    }
    // 升级后的冒泡排序
    this.modifiedBubbleSort = function() {
        let len = array.length;
        for(let i = 0; i < len; i++) {
            for(let j = 0; j < len - 1 - i;j++ ) {
                if(array[j] > array[j+1]) {
                    swap(j, j+1);
                }
            }
        }
    }
// 选择排序
this.selectionSort = function() {
    var len = array.length;
    var indexMin;
    for(let i = 0; i < len -1; i++) {
        let indexMin = i;
        for(let j = i; j < len; j++) {
            if(array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if( i !== indexMin) {
            swap(i, indexMin);
        }
    }
}
// 插入排序
this.insertionSort = function() {
    let len = array.length;
    let j;
    let temp;
    for(let i = 0; i < length; i++) {
        j = i;
        temp = array[i];
        while( j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
}
this.mergeSort = function() {
    array = mergeSortRec(array);
}
var mergeSortRec = function(array) {
    let len = array.length;
    if(length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right))
}
var merge = function(left, right) {
    let result = [];
    let il = 0;
    let ir = 0;
    while(il < left.length && ir < right.length) {
        if(left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(left[ir++])
        }
    }
    while(il < left.length) {
        result.push(left[il++]);
    }
    while(ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}
    // 快速排序
    this.quickSort = function() {
        quick(array, 0, array.length - 1);
    }
    var quick = function(array, left, right) {
        var index;
        if(array.length > 1) {
            index = partion(array, left, right);
            if(left < index - 1) {
                quick(array, left, index - 1);
            }
            if(index < right) {
                quick(array, index, right);
            }
        }
    }
    var partition = function(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)];
        var i = left;
        var j = right;
        while(i <= j) {
            while(array[i] < pivot) {
                i++;
            }
            while(array[j] > pivot) {
                j--;
            }
            if(i <= j) {
                swap(i, j);
                i++;
                j--;
            }
        }
        return i;
    }
}

function createNonSortedArray(size) {
    var array = new ArrayList();
    for(let i = size; i > 0;i--) {
        array.insert(i);
    }
    return array;
}
var array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());

let bubbleSort = function() {
    let len = array.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - 1;j++ ) {
            if(array[j] > array[j+1]) {
                swap(j, j+1);
            }
        }
    }
}
// 升级后的冒泡排序
let modifiedBubbleSort = function() {
    let len = array.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - 1 - i;j++ ) {
            if(array[j] > array[j+1]) {
                swap(j, j+1);
            }
        }
    }
}