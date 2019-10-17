const { swap } = require('./util');
// 给定num，将数组中小于num的放在左侧，等于放在中间，大于右边的放在右侧
function divideThree(arr, l, r, num) {
    var minX = l - 1;
    var maxX = r + 1;
    for (let i = l; i < maxX; i++) {
        if (arr[i] < num) {
            swap(arr, i, ++minX)
        } else if (arr[i] > num) {
            swap(arr, i, --maxX)
            i--
        }
    }
    return [minX + 1, maxX - 1];
}
// const arr = [5, 4, 2, 1, 4, 8, 2, 6, 4, 3, 6, 7, 2]; // divideTwo(arr,4);
// const arr = [4, 2, 1, 4, 2, 4, 3, 2]; // divideTwo(arr,4);
// const arr = [5, 4, 4, 6, 4, 7]; // divideTwo(arr,4);
// console.log(divideThree(arr, 0, arr.length - 1, 4));

// console.log(arr);

module.exports = divideThree;
