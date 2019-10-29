
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
        console.log(item.map(sub => `    ${sub}`.slice(-3)).join(' '));
        console.log('')
    })
}

function swap(arr, posA, posB) {
    let a = arr[posA.r][posA.c];
    let b = arr[posB.r][posB.c];
    // console.log('posA', posA);
    // console.log('posB', posB);
    a = a ^ b; // a 此时包含a和b的整数信息
    b = a ^ b; // b = a;
    a = a ^ b; // a = b;
    arr[posA.r][posA.c] = a;
    arr[posB.r][posB.c] = b;
}


function rotateRange(arr, start, end) {
    if (start === end) {
        return;
    } else {
        let r = start;
        let c = end;
        // (0,3) -> (0,0) c=3 ,r=0
        while (c > start) {
            swap(arr, { r: r, c: c }, { r: end - c + start, c: r })
            c--
        }
        // (0,0) -> (3,0) c=0,r=0
        while (r < end) {
            swap(arr, { r: r, c: c }, { r: end, c: r })
            r++
        }
        // (3,0) -> (3,3) c=0,r=3
        while (c < end) {
            swap(arr, { r: r, c: c }, { r: end - c + start, c: end })
            c++
        }
    }
}
function rotateAll(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        rotateRange(arr, start++, end--);
    }
}
const arr = getData(6);
printBinaryArr(arr);
console.log('=============================');
// rotateRange(arr, 1, 2);
rotateAll(arr);
printBinaryArr(arr);
// printCircle(arr);
