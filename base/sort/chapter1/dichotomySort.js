const { checkSortMethod } = require('./util.js');
let mergeSort = function(arr) {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    const cur = arr[0];
    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > cur) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i])
        }
    }
    rightArr = mergeSort(rightArr);
    leftArr = mergeSort(leftArr);
    return [...leftArr, cur, ...rightArr];


};
let sort = function(arr) {
    const newArr = mergeSort(arr);
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = newArr[i];
    }
}

checkSortMethod(sort);
