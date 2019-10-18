const { checkSortMethod } = require('./util.js');
function merge(arr, m, mid, n) {
    const newArr = [];
    let leftI = m;
    let rightI = mid + 1;
    while (leftI <= mid && rightI <= n) {
        newArr.push(arr[leftI] <= arr[rightI] ? arr[leftI++] : arr[rightI++])
    }
    while (leftI <= mid) { newArr.push(arr[leftI++]); }
    while (rightI <= n) { newArr.push(arr[rightI++]); }
    for (let i = 0; i < newArr.length; i++) {
        arr[i + m] = newArr[i];
    }
}
function mergeSortDivide(arr, m, n) {
    if (m === n) {
        return;
    }
    const mid = Math.floor((m + n) / 2)
    mergeSortDivide(arr, m, mid);
    mergeSortDivide(arr, mid + 1, n); merge(arr, m, mid, n);
}

var mergeSort = function(arr) {
    if (!arr || arr.length <= 2) {
        return;
    }
    mergeSortDivide(arr, 0, arr.length - 1);
};
// const arr = [12, 8, 7, 15, 3, -3, 0, -3, 0, -3, 0, 2323333];
// mergeSort(arr)
// console.log(arr);
checkSortMethod(mergeSort);
