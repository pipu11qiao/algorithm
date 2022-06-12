/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const dirArr = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
var updateBoard = function (board, click) {
  const m = board.length;
  const n = board[0].length;
  const countBoard = new Array(m).fill(0).map(_ => new Array(n).fill(0))
  board.forEach((line, i) => {
    line.forEach((item, j) => {
      if (item === 'M') {
        dirArr.forEach(dirObj => {
          const nextI = dirObj[0] + i;
          const nextJ = dirObj[1] + j;
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            countBoard[nextI][nextJ]++
          }
        })
      }
    })
  })
  const clickItem = board[click[0]][click[1]];
  const visitedMap = {};
  const [cI, cJ] = click;
  if (clickItem === 'M') {
    board[cI][cJ] = 'X';
  } else {
    if (countBoard[cI][cJ] > 0) {
      board[cI][cJ] = countBoard[cI][cJ] + ''
    } else {
      visitedMap[`${cI}-${cJ}`] = 1
      bfs([[cI, cJ]]);
      board[cI][cJ] = 'B';
    }
  }
  function bfs(queue) {
    while (queue.length) {
      const pos = queue.shift();
      const [i, j] = pos;
      dirArr.forEach(dirObj => {
        const nextI = dirObj[0] + i;
        const nextJ = dirObj[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          const nextItem = board[nextI][nextJ];
          const countItem = countBoard[nextI][nextJ];
          if (nextItem !== 'M' && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1
            if (nextItem === 'E' && countItem === 0) {
              board[nextI][nextJ] = 'B'
              queue.push([nextI, nextJ]);
            } else {
              board[nextI][nextJ] = countItem + '';
            }
          }
        }
      })

    }
  }

  return board
};

function test() {
  let fun = updateBoard;
  let params = [
    // [["B", "1", "E", "1", "B"], ["B", "1", "M", "1", "B"], ["B", "1", "1", "1", "B"], ["B", "B", "B", "B", "B"]],
    // [1, 2]
    [
      ["E", "E", "E", "E", "E"],
      ["E", "E", "M", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"]
    ],
    [3, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()