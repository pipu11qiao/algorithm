/**
 *旋转正方形矩阵
 【题目】 给定一个整型正方形矩阵matrix，请把该矩阵调整成 顺时针旋转90度的样子。
 【要求】 额外空间复杂度为O(1)。
 */
const util = require('./util');
const {createDyadicArray, printDyadicArray, swap} = util;

let num = 0
const arr = createDyadicArray(5, 5, () => ++num);
printDyadicArray(arr);

function rotateRange(arr, startR, startC, endR, endC) {
    const lenR = arr.length;
    let r = startR;
    let c = startC;
    if (startR === endR - 1 && startC === endC - 1) {
        return
    }
    while (r < endR) {
        r++;
        swap(arr, r, c, startR, lenR - 1 - r);
    }
    while (c < endC) {
        c++;
        swap(arr, r, c, c, startC);
    }
    while (r > startR) {
        r--
        swap(arr, r, c, endR, lenR - 1 - r)
    }
}

function rotateCircle(arr) {
    let startR = 0;
    let startC = 0;
    let endR = arr.length - 1;
    let endC = arr[0].length - 1;
    while (startR < endR && startC < endC) {
        rotateRange(arr, startR, startC, endR, endC);
        startR++;
        if(endR>startR){
            endR--;
        }
        startC++;
        if(endC>startC){
            endC--
        }
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


rotateCircle(arr);
// rotateRange(arr, 1, 1, 2, 2);
// rotateRange(arr, 0, 0, 4,4);
// rotateRange(arr, 1, 1, 3, 3);
console.log('=============================')
printDyadicArray(arr);
