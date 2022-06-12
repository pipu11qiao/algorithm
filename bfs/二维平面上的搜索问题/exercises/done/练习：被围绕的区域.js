/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const visitedMap = {};
  board.forEach((line, i) => {
    line.forEach((item, j) => {
      if (i === 0 || i == m - 1 || j === 0 || j === n - 1) {
        if (item === 'O' && !visitedMap[`${i}-${j}`]) {
          visitedMap[`${i}-${j}`] = 1
          bfs([[i, j]]);
        }
      }
    })
  })
  function bfs(queue) {
    while (queue.length) {
      const pos = queue.shift();
      board[pos[0]][pos[1]] = '1';
      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (board[nextI][nextJ] === 'O' && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1
            queue.push([nextI, nextJ]);
          }
        }
      })
    }
  }
  board.forEach((line, i) => {
    line.forEach((item, j) => {
      if (item === '1') {
        board[i][j] = 'O'
      } else if (item === 'O') {
        board[i][j] = 'X'
      }
    })
  })
  return board

};

function test() {
  let fun = solve;
  let params = [
    [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()