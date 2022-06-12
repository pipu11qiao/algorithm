/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var colorBorder = function (grid, row, col, color) {
  const visitedMap = {};
  const changeArr = [];
  const m = grid.length;
  const n = grid[0].length;
  function bfs(i, j) {
    let arr = [[i, j]];
    let num = grid[i][j];
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        let isBoard = curI === 0 || curI === m - 1 || curJ === 0 || curJ === n - 1;
        if (!isBoard) {
          isBoard = dirArr.some((dirObj) => {
            const nextI = curI + dirObj[0];
            const nextJ = curJ + dirObj[1];
            return grid[nextI] && grid[nextI][nextJ] && (grid[nextI][nextJ] !== num)
          })
        }
        // if (curI === row && curJ === col) {
        //   isBoard = false
        // }
        if (isBoard) {
          changeArr.push([curI, curJ])
        }
        dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (grid[nextI][nextJ] === num && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1;
              tmpArr.push([nextI, nextJ])
            }
          }
        })
      })
      arr = tmpArr
    }
  }
  visitedMap[`${row}-${col}`] = 1
  bfs(row, col);
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
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 1, 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()