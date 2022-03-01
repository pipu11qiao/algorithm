/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function (pairs, isRoot = true) {
  console.log(`pairs`, pairs);
  let numMap = {};
  let comMap = {};
  const len = pairs.length;

  for (let i = 0; i < len; i++) {
    const pair = pairs[i]
    const num1 = pair[0];
    const num2 = pair[1];
    numMap[num1] = 1;
    numMap[num2] = 1;
    comMap[`${num1}-${num2}`] = 1
    comMap[`${num2}-${num1}`] = 1
  }
  // 找到符合的根节点
  let rootArr = []
  for (let num in numMap) {
    if (Object.keys(numMap).every(_num => _num === num || (comMap[`${num}-${_num}`]))) {
      rootArr.push(num)
    }
  }
  let rootlen = rootArr.length;
  if (rootlen === 0) {
    if (isRoot) {
      return 0
    } else {
      return 1
    }
  } else {
    let res = 0;
    for (let i = 0; i < rootlen; i++) {
      let rootNum = rootArr[i];
      let otherPairs = pairs.filter(item => item.indexOf(Number(rootNum)) === -1)
      const otherPairsLen = otherPairs.length;
      if (otherPairsLen === 0) {
        res += 1
      } else if (otherPairsLen === 1) {
        res += 2
      } else {
        const otherMap = {};
        let hasSame = false;
        otherPairs.forEach(item => {
          if (otherMap[item[0]] || otherMap[item[1]]) {
            hasSame = true
          } else {
            otherMap[item[0]] = 1;
            otherMap[item[1]] = 1;
          }
        })
        if (!hasSame) {
          res += 2
        } else {
          console.log(`rootNum`, rootNum);
          res += checkWays(otherPairs, false);
        }
      }
    }
    return res > 2 ? 2 : res
  }
};
function test() {
  let fun = checkWays;
  let params = [
    // [[1, 2], [2, 3]]
    // [[1,2],[2,3],[1,3]]
    // [[1, 2], [2, 3], [2, 4], [1, 5]]
    // [[3, 5], [4, 5], [2, 5], [1, 5], [1, 4], [2, 4]]
    // [[1, 5], [1, 3], [2, 3], [2, 4], [3, 5], [3, 4]]
    // [[1, 5], [1, 3], [2, 3], [3, 5], [3, 4]]
    // [[3, 4], [2, 3], [4, 5], [2, 4], [2, 5], [1, 5], [1, 4]]
    // [[1, 5], [1, 3], [2, 3], [2, 4], [3, 5], [3, 4]]
    // [[11, 13], [2, 11], [8, 12], [7, 9], [7, 15], [4, 14], [1, 14], [8, 11], [3, 5], [8, 9], [14, 15], [3, 14], [2, 8], [4, 9], [13, 14], [12, 14], [6, 14], [9, 14], [4, 8], [9, 12], [5, 11], [6, 9], [3, 13], [5, 9], [3, 9], [2, 9], [3, 4], [3, 12], [9, 13], [2, 13], [8, 14], [8, 13], [11, 12], [5, 14], [9, 15], [11, 14], [6, 15], [7, 14], [3, 8], [9, 11], [2, 14], [3, 11], [9, 10], [1, 9], [1, 8], [2, 3], [5, 8], [2, 5]]
    [[3,4],[2,3],[4,5],[2,4],[2,5],[1,5],[1,4]]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()