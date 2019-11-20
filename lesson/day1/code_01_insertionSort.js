const util = require('./util');
const {checkSortMethod, swap} = util;

function sort(arr) {
    if (!arr || arr.length <= 1) {
        return
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
}

checkSortMethod(sort);
