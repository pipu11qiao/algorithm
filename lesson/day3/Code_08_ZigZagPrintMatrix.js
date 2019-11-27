/*
“之”字形打印矩阵
【题目】 给定一个矩阵matrix，按照“之”字形的方式打印这 个矩阵，例如:1 2 3 45 6 7 89 10 11 12 “之”字形打印的结果为:1，2，5，9，6，3，4，7，10，11， 8，12
【要求】 额外空间复杂度为O(1)。
 */

const util = require('./util');
const {createDyadicArray, printDyadicArray} = util;

let num = 0;
const arr = createDyadicArray(4, 6, () => (`  ${++num}`.slice(-3)));
printDyadicArray(arr);

// 斜线上方坐标和斜线下方坐标
function printSkew(arr, startR, startC, endR, endC, direction) {
    let r = 0;
    let c = 0;

    if (direction > 0) {
        r = startR + startC > endC ? (startR + startC) - endC : 0;
        c = startR + startC > endC ? endC : startR + startC;
        while (r <= endR && c >= 0) {
            console.log(arr[r++][c--])
        }

    } else {
        r = startR + startC > endR ? endR : startR + startC;
        c = startR + startC > endR ? (startR + startC) - endR : 0;
        while (r >= 0 && c <= endC) {
            console.log(arr[r--][c++])
        }
    }
}

function printZigZag(arr) {
    let direction = 1;
    let lenR = arr.length;
    let lenC = arr[0].length;
    for (let i = 0; i < lenR + lenC - 1; i++) {
        printSkew(arr, 0, i, lenR - 1, lenC - 1, direction);
        direction = -direction
    }

}

const testArr = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
];
printZigZag(testArr);

// printSkew(arr, 1, 5, 3, 5, 1);
