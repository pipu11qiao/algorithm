/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var shortestBridge = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let visitedMap = {};
  let islandArr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1
        bfs(i, j)
      }
    }
  }
  function bfs(i, j) {
    let arr = [[i, j]];
    let curArr = [];
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        curArr.push([curI, curJ]);
        dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (grid[nextI][nextJ] === 1 && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ]);
            }
          }
        })
      })
      arr = tmpArr;
    }
    islandArr.push(curArr)
  }
  let min = Number.POSITIVE_INFINITY;
  islandArr[0].forEach(item1 => {
    islandArr[1].forEach(item2 => {
      let distance = Math.abs(item2[0] - item1[0]) + Math.abs(item2[1] - item1[1]) - 1;
      min = Math.min(min, distance)
    })
  })
  return min
};

function test() {
  let fun = shortestBridge;
  let params = [
    [[0, 1], [1, 0]]
    // [[0, 1, 0], [0, 0, 0], [0, 0, 1]]
    // [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()