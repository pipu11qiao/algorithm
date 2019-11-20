const util = require('./util');
const {checkSortMethod, swap} = util;

function sort(arr) {
    if (!arr || arr.length <= 1) {
        return
    }
    heapInsert(arr, arr.length);
    for (let i = arr.length - 1; i >= 1; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }
}

// 将一个数组转为大根堆 该节点的父节点位置 (i-1) / 2
function heapInsert(arr, size) {
    for (let i = 1; i < size; i++) {
        // 将arr[i] 放入arr[0] ~ arr[i-1]的大根堆中
        // 不断向上找父节点，直到当前节点小于等于父节点或者到达根节点
        let child = i;
        let parent;
        while ((parent = Math.floor((child - 1) / 2)) >= 0 && arr[parent] < arr[child]) {
            swap(arr, parent, child);
            child = parent;
        }
    }
}

// 将较小的根节点放置到正确的位置(根节点较小)
function heapify(arr, i, size) {
    let child;
    while ((child = 2 * i + 1) < size) {
        if (2 * i + 2 < size && arr[2 * i + 2] > arr[child]) {
            child = 2 * i + 2;
        }
        if (arr[child] > arr[i]) {
            swap(arr, child, i);
            i = child;
        } else {
            break
        }
    }

}

// const arr = [20, -84, 51, -4, 36, -49, -30, 10, 32, -47, 0, 79, -38, -8];
// sort(arr);
// console.log(arr);
checkSortMethod(sort);
