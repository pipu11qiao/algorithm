const util = require('./util');
const {swap} = util;

function netherlandArr(arr, start, end, target) {
    let minI = start - 1;
    let maxI = end + 1;
    for (let i = start; i < maxI; i++) {
        if (arr[i] > target) {
            swap(arr, i--, --maxI);
        } else if (arr[i] < target) {
            swap(arr, i, ++minI);
        }
    }
    return {
        minI: minI + 1,
        maxI: maxI - 1
    }
}


// test
function test() {
    const arr = [20, -84, 0, 51, -4, 36, 0, -49, -30, 10, 32, -47, 0, 79, -38, -8];
    netherlandArr(arr, 2, arr.length - 3, 0);
    console.log(arr);
}

// test();

module.exports = {
    netherlandArr
};

