const util = require('../util');
const arrData = require('./data/data');
const {printDyadicArray} = util;
printDyadicArray(arrData);

function next(arr, cur, direction) {
    const {r, c, sum} = cur;
    const lenR = arr.length;
    const lenC = arr[0].length;
    if (direction === 'right') {
        if (c + 1 < lenC) {
            return {
                r,
                c: c + 1,
                sum: sum + arr[r][c + 1]
            }
        }
    } else {
        if (r + 1 < lenR) {
            return {
                r: r + 1,
                c: c,
                sum: sum + arr[r + 1][c]
            }
        }
    }
    return null;

}

/**
 * 最小路径和
 */
function pathSum(arr, num) {
    const isLast = num === undefined;
    if (isLast) {
        num = arr.length + arr[0].length;
    }
    if (num === 1) {
        return [{
            r: 0,
            c: 0,
            sum: arr[0][0]
        }]
    }
    const prevArr = pathSum(arr, num - 1);
    const resArr = [];
    for (let i = 0; i < prevArr.length; i++) {
        const rightRes = next(arr, prevArr[i], 'right');
        const downRes = next(arr, prevArr[i], 'down');
        if (rightRes) {
            resArr.push(rightRes);
        }
        if (downRes) {
            resArr.push(downRes);
        }

    }
    if(isLast){
        return prevArr;
    }
    return resArr;
}

console.log(pathSum(arrData));
