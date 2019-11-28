/*
在行列都排好序的矩阵中找数
【题目】 给定一个有N*M的整型矩阵matrix和一个整数K， matrix的每一行和每一 列都是排好序的。实现一个函数，判断K 是否在matrix中。 例如: 0 1 2 5 2 3 4 7 4
4 4 8 5 7 7 9 如果K为7，返回true;如果K为6，返 回false。
【要求】 时间复杂度为O(N+M)，额外空间复杂度为O(1)
 */

const util = require('./util');
const {createDyadicArray, printDyadicArray} = util;
const getSortMatrix = () => {
    const matrixMap = {};
    return (x, y) => {
        const num = Math.ceil(Math.random() * 3 + 2)
        let val = num;
        if (x === 0 && y === 0) {
            val = num;
        } else if (x === 0) {
            val = matrixMap[`${x}_${y - 1}`] + num;
        } else if (y === 0) {
            val = matrixMap[`${x - 1}_${y}`] + num;
        } else {
            if (y === 2 && x === 2) {
                val = 50;
            } else if (y === 3 && x === 3) {
                val = 80;
            } else {
                val = Math.max(matrixMap[`${x}_${y - 1}`], matrixMap[`${x - 1}_${y}`]) + num;
            }
        }
        matrixMap[`${x}_${y}`] = val;
        return val;
    }
};

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

const arr = [
    [3, 8, 13, 18, 21, 26],
    [6, 13, 16, 23, 27, 32],
    [10, 17, 50, 55, 60, 63],
    [15, 22, 55, 80, 85, 88],
];
printDyadicArray(arr);
const point = findNumInSortMatrix(arr, 23);
console.log('point', point);
