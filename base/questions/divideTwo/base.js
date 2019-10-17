function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

}
// 给定num，将数组中小于num的放在左侧，大于右边的放在右侧
function divideTwo(arr, num, maxNum) {
    var min = 0;
    var max = maxNum || arr.length - 1;
    while (min < max) {
        if (arr[min] > num || (maxNum && arr[min] === num)) {
            swap(arr, min, max)
            console.log(arr);
            max--
        } else {
            min++
        }
    }
    return min
}
function divideThree(arr, num) {
    const max = divideTwo(arr, num)
    divideTwo(arr, num, max);
}
const arr = [5, 4, 2, 1, 4, 8, 2, 6, 4, 3, 6, 7, 2]; // divideTwo(arr,4);
divideThree(arr, 4);

console.log(arr);
