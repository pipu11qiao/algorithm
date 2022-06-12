/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var closedIsland = function (board) {
  const m = board.length;
  const n = board[0].length;
  const visitedMap = {};
  let changeArr = [];
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0 && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1
        bfs(i, j);
      }

    }
  }
  function bfs(i, j) {
    const oArr = [];
    let arr = [[i, j]];
    let hasBoard = false;
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        oArr.push([curI, curJ]);
        if (curI === 0 || curI === m - 1 || curJ === 0 || curJ === n - 1) {
          hasBoard = true
        }
        dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (board[nextI][nextJ] === 0 && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ]);
            }
          }
        })
      })
      arr = tmpArr
    }
    if (!hasBoard) {
      res++
    }
  }
  return res
};

function test() {
  let fun = closedIsland;
  let params = [
    // [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]
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