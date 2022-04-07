/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function dfs(node, map, pNode) {
  const children = map[node];
  const len = children.length;
  const isRoot = pNode === undefined;
  if (len === 1 && !isRoot) {
    return {
      c: 1,
      str: `${node}`,
      childC: 1,
      childStr: `${node}`,
    }
  }
  let maxObj = null;
  let max = 0;
  let nodeArr = null;
  let childMax = 0;
  let childObj = null;
  nodeArr = [];
  for (let i = 0; i < len; i++) {
    const curNode = children[i]
    if (curNode !== pNode) {
      const curObj = dfs(curNode, map, node);
      nodeArr.push(curObj);
      const { c, childC } = curObj;
      if (childC > childMax) {
        childMax = childC
        childObj = curObj
      }
      if (c > max) {
        max = c
        maxObj = curObj
      }
    }
  }
  nodeArr.sort((a, b) => b.c - a.c);
  const curMaxC = nodeArr[0].c + (nodeArr[1] ? nodeArr[1].c : 0) + 1;
  const curChildC = childMax;
  let childC;
  let childStr;
  if (curMaxC > childMax) {
    childC = curMaxC;
    childStr = `${nodeArr[0].str}-${node}${nodeArr[1] ? `-${nodeArr[1].str.split('-').reverse().join('-')}` : ''}`
  } else {
    childC = childMax;
    childStr = childObj.childStr
  }

  return {
    c: max + 1,
    str: `${maxObj.str}-${node}`,
    childC,
    childStr,
  }
}
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }
  const map = {};
  for (let i = 0; i < edges.length; i++) {
    edges[i].forEach((num, index) => {
      if (!map[num]) {
        map[num] = [];
      }
      map[num].push(edges[i][(index + 1) % 2])
    })
  }
  // 任意节点均可
  const { c, str, childC, childStr } = dfs(0, map)
  // console.log(`c, str`, c, str);
  // console.log(`childC, childStr`, childC, childStr);
  const arr = childStr.split('-');
  let half = Math.floor(childC / 2);
  if (childC % 2 === 0) {
    return [arr[half], arr[half - 1]]
  } else {
    return [arr[half]]
  }
};

function test() {
  let fun = findMinHeightTrees;
  let params = [
    7, [[0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 6]]
    // 6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()