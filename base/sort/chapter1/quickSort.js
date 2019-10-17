const { checkSortMethod } = require('./util.js');
const divideThree = require("./divideThree.js");

function quickSort(arr, l, r) {
    if (!arr || r - l <= 0) {
        return;
    }
    const x = arr[r];
    const range = divideThree(arr, 0, r, x);
    quickSort(arr, 0, range[0] - 1);
    quickSort(arr, range[1] + 1, r);
};
function sort(arr) {
    quickSort(arr, 0, arr.length - 1)
}

// const arr = [12, 8, 7, 15, 3, -3, 0, -3, 0, -3, 0, 4];
// quickSort(arr, 0, arr.length - 1)
// console.log(arr);
checkSortMethod(sort);
