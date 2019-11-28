function getData(xNum, yNum) {
    var arr = [];

    for (let x = 0; x < xNum; x++) {
        arr[x] = [];
        for (let y = 0; y < yNum; y++) {
            const num = Math.ceil(Math.random() * 3 + 2)
            if (x === 0 && y === 0) {
                arr[x].push(num)
            } else if (x === 0) {
                arr[x].push(arr[x][y - 1] + num)
            } else if (y === 0) {
                arr[x].push(arr[x - 1][y] + num)
            } else {
                if (y === 2 && x === 2) {
                    arr[x].push(50)
                } else if (y === 3 && x === 3) {
                    arr[x].push(80)
                } else {
                    arr[x].push(Math.max(arr[x][y - 1], arr[x - 1][y]) + num)
                }
            }
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

function findNumInSortMatrix(arr, num) {
    let r = 0;
    let c = arr[0].length - 1;
    while (c > -1 || r < arr.length) {
        if (arr[r][c] === num) {
            return {r, c}
        } else if (arr[r][c] > num) {
            c--
        } else {
            r++
        }
    }
    return false;
}

const arr = getData(4, 6);
printBinaryArr(arr);
findNumInSortMatrix(arr, 50)
findNumInSortMatrix(arr, 80)

