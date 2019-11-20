const util = require('./util');
const {checkSortMethod, swap} = util;
const netherlandObj = require('./code_08_NetherlandsFlag');
const {netherlandArr} = netherlandObj;

function sort(arr) {
    if (!arr || arr.length <= 1) {
        return
    }
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, start, end) {
    if (end - start <= 1) {
        return;
    }
    const target = arr[Math.floor(Math.random() * (end - start + 1) + start)];
    const boundary = netherlandArr(arr, start, end, target);
    quickSort(arr, start, boundary.minI);
    quickSort(arr, boundary.maxI, end);

}

// const arr = [20, -84, 51, -4, 36, -49, -30, 10, 32, -47, 0, 79, -38, -8];
// sort(arr);
// console.log(arr);
checkSortMethod(sort);
