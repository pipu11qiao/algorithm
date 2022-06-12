/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const visitedMap = {};
  grid.forEach((line, i) => {
    line.forEach((item, j) => {
      if (
        item === 1 && (i === 0 || i === m - 1 || j === 0 || j === n - 1)
        && !visitedMap[`${i}-${j}`]
      ) {
        visitedMap[`${i}-${j}`] = 1
        bfs([[i, j]])
      }
    })
  })
  function bfs(queue) {
    while (queue.length) {
      const pos = queue.shift();
      const [i, j] = pos;
      grid[i][j] = 0;
      dirArr.forEach(dirObj => {
        const nextI = dirObj[0] + i;
        const nextJ = dirObj[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (grid[nextI][nextJ] === 1 && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1;
            queue.push([nextI, nextJ]);
          }
        }
      })
    }
  }
  grid.forEach(line => {
    line.forEach(item => {
      if (item === 1) {
        res++
      }
    })
  })
  return res
};

function test() {
  let fun = numEnclaves;
  let params = [
    // [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
    [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
  ];
  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()