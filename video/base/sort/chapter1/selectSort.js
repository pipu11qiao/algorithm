const { checkSortMethod, swap } = require('./util.js');

var selectSort = function(arr) {
    if (!arr || arr.length <= 2) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j)
            }
        }
    }
};
checkSortMethod(selectSort);
