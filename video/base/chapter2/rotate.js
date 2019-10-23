
function getData(xNum) {
    var arr = [];
    let count = 1;
    for (let x = 0; x < xNum; x++) {
        arr[x] = [];
        for (let y = 0; y < xNum; y++) {
            arr[x].push(count++)
        }
    }
    return arr;
}
function printBinaryArr(arr) {
    arr.forEach(item => {
        console.log(item.join(','));
    })
}
function rotateRange(arr, start, end) {
    if (start === end) {
        return;
    } else {

    }
}
const arr = getData(4);
printBinaryArr(arr);
// printRange(arr, 0, 0, 3, 3);
// printCircle(arr);
