/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const pMap = {};
  let pArr = [];
  let aArr = [];
  for (let j = 0; j < n; j++) {
    pArr.push([0, j]);
    aArr.push([m - 1, j]);
  }
  for (let i = 0; i < m; i++) {
    pArr.push([i, 0]);
    aArr.push([i, n - 1]);
  }
  let res = [];
  let visitedMap = {};
  pArr.forEach(([curI, curJ]) => {
    if (!visitedMap[`${curI}-${curJ}`]) {
      visitedMap[`${curI}-${curJ}`] = 1;
      bfs([[curI, curJ]], visitedMap, true)
    }
  })
  visitedMap = {};
  aArr.forEach(([curI, curJ]) => {
    if (!visitedMap[`${curI}-${curJ}`]) {
      visitedMap[`${curI}-${curJ}`] = 1;
      bfs([[curI, curJ]], visitedMap, false)
    }
  })
  function bfs(queue, _visitedMap, isP) {
    while (queue.length) {
      const pos = queue.shift();
      const curNum = heights[pos[0]][pos[1]];
      if (isP) {
        pMap[`${pos[0]}-${pos[1]}`] = 1;
      } else {
        if (pMap[`${pos[0]}-${pos[1]}`]) {
          res.push([pos[0], pos[1]]);
        }
      }
      dirArr.forEach(dirObj => {
        const nextI = pos[0] + dirObj[0];
        const nextJ = pos[1] + dirObj[1];
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (heights[nextI][nextJ] >= curNum && !_visitedMap[`${nextI}-${nextJ}`]) {
            _visitedMap[`${nextI}-${nextJ}`] = 1;
            queue.push([nextI, nextJ]);
          }
        }
      })
    }
  }
  return res;
};

function test() {
  let fun = pacificAtlantic;
  let params = [
    [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()