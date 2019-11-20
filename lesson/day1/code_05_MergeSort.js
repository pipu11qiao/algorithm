const util = require('./util');
const {checkSortMethod, swap} = util;

function sort(arr) {
    if (!arr || arr.length <= 1) {
        return
    }
    mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, start, end) {
    if (start === end) {
        return
    }
    const middleI = Math.floor((end + start) / 2);
    mergeSort(arr, start, middleI);
    mergeSort(arr, middleI + 1, end);
    mergePart(arr, start, middleI, end);
}

function mergePart(arr, start, middleI, end) {
    const tmpArr = [];
    let leftI = start;
    let rightI = middleI + 1;
    while (leftI <= middleI && rightI <= end) {
        tmpArr.push(arr[leftI] > arr[rightI] ? arr[rightI++] : arr[leftI++]);
    }
    while (leftI <= middleI) {
        tmpArr.push(arr[leftI++]);
    }
    while (rightI <= end) {
        tmpArr.push(arr[rightI++]);
    }
    for (let i = 0; i < tmpArr.length; i++) {
        arr[i + start] = tmpArr[i]
    }
}

// const arr = [20, -84, 51, -4, 36, -49, -30, 10, 32, -47, 0, 79, -38, -8];
// sort(arr);
// console.log(arr);
checkSortMethod(sort);
