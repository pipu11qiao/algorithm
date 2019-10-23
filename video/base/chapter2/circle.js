function getData(xNum, yNum) {
    var arr = [];
    let count = 1;
    for (let x = 0; x < xNum; x++) {
        arr[x] = [];
        for (let y = 0; y < yNum; y++) {
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
function printRange(arr, startR, startC, endR, endC) {
    if (startR === endR) {
        while (startC <= endC) {
            console.log(arr[startR][startC++]);
        }
    } else if (startC === endC) {
        while (startR <= endR) {
            console.log(arr[startR++][startC]);
        }
    } else {
        let r = startR;
        let c = startC;
        while (c < endC) {
            console.log(arr[r][c++]);
        }
        while (r < endR) {
            console.log(arr[r++][c]);
        }
        while (c > startC) {
            console.log(arr[r][c--]);
        }
        while (r > startR) {
            console.log(arr[r--][c]);
        }
    }
}
function printCircle(arr) {
    let startR = 0;
    let startC = 0;
    let endR = arr.length - 1;
    let endC = arr[0].length - 1;
    while (startR <= endR && startC <= endC) {
        printRange(arr, startR++, startC++, endR--, endC--)
    }
}
const arr = getData(4, 4);
printBinaryArr(arr, 0, 0, 0, 4);

// printRange(arr, 0, 0, 3, 3);
printCircle(arr);
