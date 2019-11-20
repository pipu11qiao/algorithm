const util = require('./util');
const {checkSortMethod, swap} = util;

function sort(arr) {
    if (!arr || arr.length <= 1) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, i, min);
        }
    }
}

checkSortMethod(sort);
