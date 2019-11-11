const util = require('../util');
const arrData = require('./data/data');
const {printDyadicArray} = util;
// printDyadicArray(arrData);

// 找到当前节点周围是1的节点
function getIslandAround(r, c, arr) {
    const lenR = arr.length;
    const lenC = arr[0].length;
    const aroundNode = [];

    function checkNode(r, c) {
        if (r >= 0 && c >= 0 && c < lenC && r < lenR && arr[r][c] > 0) {
            aroundNode.push({r, c})
        }
    }

    //left  top right bottom
    checkNode(r, c - 1);
    checkNode(r - 1, c);
    checkNode(r, c + 1);
    checkNode(r + 1, c);
    return aroundNode;
}


function findIsland(arr) {
    const lenR = arr.length;
    const lenC = arr[0].length;
    const islandMap = {};
    const allIsland = [];
    for (let r = 0; r < lenR; r++) {
        for (let c = 0; c < lenC; c++) {
            // 遍历每一个节点,若果当前节点大于0并且没有被记录过，就是新岛,创建一个含有该节点的栈
            // 推栈，记录，找周围节点既大于零也没有被记录的节点压入栈，直到栈的长度走完。
            if (arr[r][c] > 0 && !islandMap[`${r}_${c}`]) {
                const stack = [{r, c}];
                const newIsland = [];
                const currentIslandMap = Object.assign({}, islandMap);
                // console.log('=========================',r,c);
                while (stack.length > 0) {
                    const node = stack.pop();
                    const aroundNodes = getIslandAround(node.r, node.c, arr);
                    if (aroundNodes.length > 0) {
                        aroundNodes.forEach(aroundNode => {
                            if (!currentIslandMap[`${aroundNode.r}_${aroundNode.c}`]) {
                                currentIslandMap[`${aroundNode.r}_${aroundNode.c}`] = 1;
                                stack.push(aroundNode);
                            }
                        })
                    }
                    newIsland.push(node);
                    islandMap[`${node.r}_${node.c}`] = 1;
                }
                allIsland.push(newIsland);
            }
        }
    }
    return allIsland;
}

// console.log(getIslandAround(1,2,arrData));
const time = Date.now();
console.log('长度:', `${arrData.length * arrData[0].length} `);
const allIsland = findIsland(arrData);
// console.log('allIsland', allIsland);
console.log('time:', parseInt((Date.now() - time)));

