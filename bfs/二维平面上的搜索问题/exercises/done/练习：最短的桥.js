/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var shortestBridge = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = Number.POSITIVE_INFINITY;
  const visitedMap = {};
  let oneArr = [];
  grid.forEach((line, i) => {
    line.forEach((item, j) => {
      if (item === 1 && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1
        bfs([[i, j]], oneArr.length === 0)
      }
    })
  });
  function bfs(queue, isFirst) {
    while (queue.length) {
      const pos = queue.shift();
      if (isFirst) {
        oneArr.push([pos[0], pos[1]])
      } else {
        oneArr.forEach(onePos => {
          res = Math.min(res, Math.abs(onePos[0] - pos[0]) + Math.abs(pos[1] - onePos[1]) - 1)
        })

      }
      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (grid[nextI][nextJ] === 1 && !visitedMap[`${nextI}-${nextJ}`]) {
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
  let fun = shortestBridge;
  let params = [
    // [[0, 1], [1, 0]]
    // [[0, 1, 0], [0, 0, 0], [0, 0, 1]]
    [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()