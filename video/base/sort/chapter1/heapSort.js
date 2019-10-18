const { checkSortMethod, swap } = require('./util.js');

function heapSort(arr) {
    if (!arr || arr.length <= 1) {
        return;
    }
    heapInsert(arr, arr.length);
    // 将第一个最大的元素排除
    for (let i = arr.length - 1; i >= 1; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i)
    }

};

// 将一个数组转为大根堆 该节点的父节点位置 (i-1) / 2
function heapInsert(arr, size) {
    for (var i = 0, len = size; i < len; i++) {
        let curI = i;
        let parentI;
        while (curI >= 1 && arr[(parentI = Math.floor((curI - 1) / 2))] < arr[curI]) {
            swap(arr, parentI, curI)
            curI = parentI;
        }

    }
}

// 将一个数组转为大根堆 父节点要比子节点大 i的左子节点2i+1,右子节点2i+2,
function heapify(arr, i, size) {

    while (2 * i + 1 < size) {
        let m = 2 * i;
        let maxI = m + 2 >= size ? 1 : arr[m + 1] > arr[m + 2] ? 1 : 2;
        if (arr[i] >= arr[m + maxI]) {
            break;
        } else {
            swap(arr, i, m + maxI);
            i = maxI + m
        }
    }
}

function sort(arr) {
    quickSort(arr, 0, arr.length - 1)
}

// const arr = [1, 4, 6, 12, 8, 7, 15, 3, 2];
// const arr = [2, 8, 12, 3, 6, 4, 7, 1, 15];
// heapSort(arr)
checkSortMethod(heapSort);
