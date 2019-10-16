const { checkSumMethod, comparator } = require('./xiaohe.js');

function merge(arr, m, mid, n) {
    const newArr = [];
    let res = 0;
    let leftI = m;
    let rightI = mid + 1;
    while (leftI <= mid && rightI <= n) {
        if (arr[leftI] < arr[rightI]) {
            res += (n - rightI + 1) * arr[leftI];
            newArr.push(arr[leftI++])
        } else {
            newArr.push(arr[rightI++])
        }
    }
    while (leftI <= mid) { newArr.push(arr[leftI++]); }
    while (rightI <= n) { newArr.push(arr[rightI++]); }
    for (let i = 0; i < newArr.length; i++) {
        arr[i + m] = newArr[i];
    }
    return res;
}
function mergeSortDivide(arr, m, n) {
    if (m === n) {
        return 0;
    }
    const mid = Math.floor((m + n) / 2)
    return mergeSortDivide(arr, m, mid)
        + mergeSortDivide(arr, mid + 1, n)
        + merge(arr, m, mid, n);
}

var mergeSort = function(arr) {
    if (!arr || arr.length <= 1) {
        return 0;
    }
    return mergeSortDivide(arr, 0, arr.length - 1);
};
const arr = [4, 1, 2, 3, 5];

checkSumMethod(mergeSort);
