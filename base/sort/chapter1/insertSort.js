const { checkSortMethod, swap } = require('./util.js');

var insertSort = function(arr) {
    if (!arr || arr.length <= 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1)
        }
    }
};

checkSortMethod(insertSort);
