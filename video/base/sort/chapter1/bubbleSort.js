const { checkSortMethod, swap } = require('./util.js');

var bubbleSort = function(arr) {
    if (!arr || arr.length <= 2) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
};
checkSortMethod(bubbleSort);
