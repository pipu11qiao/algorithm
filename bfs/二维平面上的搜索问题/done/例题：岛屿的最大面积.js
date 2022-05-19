/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var maxAreaOfIsland = function (grid) {
  let visitedMap = {};
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curNum = grid[i][j];
      if (curNum === 1 && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1
        const count = bfs(i, j);
        max = Math.max(max, count)
      }

    }
  }
  function bfs(i, j) {
    let res = 0;
    let arr = [[i, j]];
    while (arr.length > 0) {
      let tmpArr = [];
      arr.forEach(item => {
        const [curI, curJ] = item;
        res++;
        dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
            if (grid[nextI][nextJ] === 1 && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ]);
            }
          }
        })
      })
      arr = tmpArr;
    }
    return res
  }
  return max
};

function test() {
  let fun = maxAreaOfIsland;
  let params = [
    [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
    // [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()