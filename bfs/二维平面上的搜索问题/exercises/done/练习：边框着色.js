/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var colorBorder = function (grid, row, col, color) {
  const m = grid.length;
  const n = grid[0].length;
  const visitedMap = {};
  const curNum = grid[row][col];
  visitedMap[`${row}-${col}`] = 1;
  const changeArr = [];
  bfs([[row, col]]);

  function bfs(queue) {
    while (queue.length) {
      const pos = queue.shift();
      const [curI, curJ] = pos;
      if (curI === 0 || curI === m - 1 || curJ === 0 || curJ === n - 1) {
        changeArr.push([curI, curJ]);
      } else {
        dirArr.forEach(([i, j]) => {
          const nextI = pos[0] + i;
          const nextJ = pos[1] + j;
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (grid[nextI][nextJ] !== curNum) {
              changeArr.push([curI, curJ]);
            }
          }
        })
      }
      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (grid[nextI][nextJ] === curNum && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1;
            queue.push([nextI, nextJ])
          }
        }
      })
    }
  }
  changeArr.forEach(([i, j]) => {
    grid[i][j] = color
  })
  return grid
};

function test() {
  let fun = colorBorder;
  let params = [
    // [[1, 1], [1, 2]], 0, 0, 3
    // [[1, 2, 2], [2, 3, 2]], 0, 1, 3
    // [[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 1, 2
    // [[1, 2, 1], [1, 2, 2], [2, 2, 1]], 1, 1, 2
    [
      [1, 2, 1, 2, 1, 2],
      [2, 2, 2, 2, 1, 2],
      [1, 2, 2, 2, 1, 2]
    ], 1, 3, 1
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()