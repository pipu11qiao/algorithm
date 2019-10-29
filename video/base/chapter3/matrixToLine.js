
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
function printBinaryArr(arr, len = 2) {
    arr.forEach(item => {
        console.log(item.map(sub => `    ${sub}`.slice(-len)).join(' '));
        if (len > 2) {
            console.log('')
        }
    })
}
function getLine(arr, r, c, endR, endC, direction) {
    if (direction > 0) {
        while (c >= 0 || r <= endR) {
            if (arr[r] && arr[r][c]) {
                console.log(arr[r][c]);
            }
            c--;
            r++;
        }
    } else {
        r = endR;
        c = c - r;
        while (r >= 0 || c <= endC) {
            if (arr[r] && arr[r][c]) {
                console.log(arr[r][c]);
            }
            c++;
            r--;
        }
    }

}
function printAllLine(arr) {
    const rNum = arr.length;
    const cNum = arr[0].length;
    for (let i = 0; i < rNum + cNum; i++) {
        getLine(arr, 0, i, rNum - 1, cNum - 1, i % 2 == 0 ? -1 : 1);
    }

}
const arr = getData(3, 4);
printBinaryArr(arr);
// getLine(arr, 0, 1, 2, 3, -1);
printAllLine(arr);
