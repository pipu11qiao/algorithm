/**
 转圈打印矩阵
 【题目】 给定一个整型矩阵matrix，请按照转圈的方式打印它。 例如:1 2 3 45 6 7 89 10 11 121314
 15 16 打印结果为:1，2，3，4，8，12，16，15，14，13，9， 5，6，7，11， 10
 【要求】 额外空间复杂度为O(1)。
 */
const util = require('./util');
const {createDyadicArray, printDyadicArray} = util;

let num = 0;
const arr = createDyadicArray(3, 3, () => (++num));
printDyadicArray(arr);

function printRange(arr, startR, startC, endR, endC) {
    let r = startR;
    let c = startC;
    if (r === endR) {
        while (c <= endC) {
            console.log(arr[r][c++]);
        }
    } else if (c === endC) {
        while (r <= endR) {
            console.log(arr[r++][c]);
        }
    } else {

        while (c < endC) {
            console.log(arr[r][c++]);
        }
        while (r < endR) {
            console.log(arr[r++][c]);
        }
        while (c > startC) {
            console.log(arr[r][c--])
        }
        while (r > startR) {
            console.log(arr[r--][c])
        }
    }
}

function printCircle(arr) {
    let startR = 0;
    let startC = 0;
    let endR = arr.length - 1;
    let endC = arr[0].length - 1;
    while (startR <= endR && startC <= endC) {
        printRange(arr, startR, startC, endR, endC);
        startR++;
        endR--;
        startC++;
        endC--
    }

}

// test
// const arr = [[0, 5, 4],
//     [6, 9, 9],
//     [1, 4, 3],
//     [2, 8, 2]]
// const arr = [
//
//     [9, 5, 7, 1],
//     [8, 5, 8, 9],
//     [8, 9, 0, 3],
//     [0, 7, 6, 9],
//     [4, 6, 1, 7],
// ]


printCircle(arr);
