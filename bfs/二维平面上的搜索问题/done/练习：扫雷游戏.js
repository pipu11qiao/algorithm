/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
let aroundArr = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1],
];

var updateBoard = function (board, click) {
  const m = board.length;
  const n = board[0].length;
  let countBoard = new Array(m).fill(0).map(() => new Array(n).fill(0));
  board.forEach((line, i) => {
    line.forEach((item, j) => {
      if (item === 'M' || item === 'X') {
        aroundArr.forEach(dirObj => {
          const nextI = i + dirObj[0];
          const nextJ = j + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            let curItem = board[nextI][nextJ]
            if (curItem !== 'M' && curItem !== 'X') {
              countBoard[nextI][nextJ]++
            }
          }
        })
      }
    })
  })

  let clickItem = board[click[0]][click[1]];
  const visitedMap = {};
  const changedMap = {};
  let changeArr = [];

  if (clickItem === 'M') {
    board[click[0]][click[1]] = 'X';
  } else if (countBoard[click[0]][click[1]] > 0) {
    board[click[0]][click[1]] = countBoard[click[0]][click[1]] + '';
  } else {
    // 不是地雷也不喝地雷相邻，空的递归的揭露
    visitedMap[`${click[0]}-${click[1]}`] = 1;
    bfs(click[0], click[1]);
  }
  function bfs(i, j) {
    let arr = [[i, j]];
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        if (!changedMap[`${curI}-${curJ}`]) {
          changedMap[`${curI}-${curJ}`] = 1
          changeArr.push([curI, curJ]);
        }
        aroundArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (countBoard[nextI][nextJ] === 0 && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ])
            } else {
              if (!changedMap[`${nextI}-${nextJ}`]) {
                changedMap[`${nextI}-${nextJ}`] = 1
                changeArr.push([nextI, nextJ])
              }
            }
          }
        })
      })
      arr = tmpArr
    }
  }
  changeArr.forEach(([i, j]) => {
    board[i][j] = countBoard[i][j] > 0 ? (countBoard[i][j] + '') : 'B'
  })
  return board
};

function test() {
  let fun = updateBoard;
  let params = [
    // [["B", "1", "E", "1", "B"], ["B", "1", "M", "1", "B"], ["B", "1", "1", "1", "B"], ["B", "B", "B", "B", "B"]],
    // [1, 2]
    // [["E", "E", "E", "E", "E"], ["E", "E", "M", "E", "E"], ["E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E"]],
    // [3, 0]
    [
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "M"],
      ["E", "E", "M", "E", "E", "E", "E", "E"],
      ["M", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "M", "M", "E", "E", "E", "E"]
    ],
    [0, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()