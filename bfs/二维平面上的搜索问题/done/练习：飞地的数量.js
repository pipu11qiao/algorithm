/**
 * @param {number[][]} grid
 * @return {number}
 */
let dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const oneGrid = grid.map(line => [...line]);
  let boardArr = [];
  let visitedMap = {};
  for (let j = 0; j < n; j++) {
    if (grid[0][j] === 1) {
      boardArr.push([0, j]);
    }
    if (grid[m - 1][j] === 1) {
      boardArr.push([m - 1, j]);
    }
  }
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 1) {
      boardArr.push([i, 0]);
    }
    if (grid[i][n - 1] === 1) {
      boardArr.push([i, n - 1]);
    }
  }
  for (let k = 0; k < boardArr.length; k++) {
    const item = boardArr[k]
    if (!visitedMap[`${item[0]}-${item[1]}`]) {
      visitedMap[`${item[0]}-${item[1]}`] = 1
      bfs(item[0], item[1]);
    }
  }
  function bfs(i, j) {
    let arr = [[i, j]];
    while (arr.length > 0) {
      let tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        oneGrid[curI][curJ] = 0;
        dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (grid[nextI][nextJ] === 1 && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1;
              tmpArr.push([nextI, nextJ]);
            }
          }
        })
      })
      arr = tmpArr;
    }
  }
  debugger
  const res = [];
  oneGrid.forEach((line, i) => {
    line.forEach((item, j) => {
      if (item === 1) {
        res.push([i, j])
      }
    })
  })
  return res.length
};

function test() {
  let fun = numEnclaves;
  let params = [
    // [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
    // [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
    [
      [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()