/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var closedIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const visitedMap = {};
  grid.forEach((line, i) => {
    debugger
    line.forEach((item, j) => {
      if (item === 0 && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1
        bfs([[i, j]])
      }
    })
  });
  function bfs(queue) {
    let isIsland = true;
    while (queue.length) {
      const pos = queue.shift();
      const [curI, curJ] = pos;
      if (curI === 0 || curI === m - 1 || curJ === 0 || curJ === n - 1) {
        isIsland = false
      }
      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (grid[nextI][nextJ] === 0 && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1
            queue.push([nextI, nextJ])
          }
        }
      })
    }
    if (isIsland) {
      res++
    }
  }
  return res
};

function test() {
  let fun = closedIsland;
  let params = [
    // [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]],
    // [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]]
    [[1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()