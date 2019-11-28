/**
 * 创建二维数组
 * @param lenR
 * @param lenC
 * @param contentFun
 * @returns {Array}
 */
function createDyadicArray(lenR, lenC, contentFun = (r, c) => `${r + 1}_${c + 1}`) {
    let arr = [];
    for (let r = 0; r < lenR; r++) {
        arr[r] = [];
        for (let c = 0; c < lenC; c++) {
            arr[r].push(contentFun(r, c))
        }
    }
    return arr;
}

function sliceStr(str, len) {
    return `          ${str}`.slice(-len);
}





function printDyadicArray(arr, showLen = 3) {
    const lenR = arr.length;
    const lenC = arr[0].length;
    for (let r = 0; r < lenR; r++) {
        const str = arr[r].map(item => sliceStr(item, showLen)).join(',');
        console.log(`[${str}]`)
    }
    return arr;
}

function swap(arr, startR, startC, endR, endC) {
    const tmp = arr[startR][startC];
    arr[startR][startC] = arr[endR][endC]
    arr[endR][endC] = tmp;
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

// const arr = createDyadicArray(3, 3, () => Math.random() > 0.5 ? 1 : 0);
// printDyadicArray(arr);
// console.log(arr)

module.exports = {
    createDyadicArray,
    printDyadicArray,
    swap,
    Node
};

