/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function getCount(num) {
  const numStr = num + '';
  let res = 0;
  for (let i = 0; i < numStr.length; i++) {
    res += Number(numStr[i])
  }
  return res
}
var movingCount = function (m, n, k) {
  let res = 0;
  const visitedMap = {};
  visitedMap['0-0'] = 1
  bfs([[0, 0]])
  function bfs(queue, isFirst) {
    while (queue.length) {
      const pos = queue.shift();
      res++
      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (!visitedMap[`${nextI}-${nextJ}`] && (getCount(nextI) + getCount(nextJ) <= k)) {
            visitedMap[`${nextI}-${nextJ}`] = 1
            queue.push([nextI, nextJ])
          }
        }
      })
    }
  }
  return res
};

function test() {
  let fun = movingCount;
  let params = [
    // 2, 3, 1
    // 3, 1, 0
    // 1, 2, 1
    3, 2, 17
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()