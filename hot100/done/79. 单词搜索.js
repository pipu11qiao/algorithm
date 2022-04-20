/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function find(board, i, j, letter, map) {
  const m = board.length;
  const n = board[0].length;
  if (i < 0 || i >= m || j < 0 || j >= n || map[`${i}-${j}`]) {
    return false
  }
  return board[i][j] === letter
}
const posArr = [[-1, 0], [1, 0], [0, 1], [0, -1]]
function findPath(board, i, j, word, wordIndex, prevMap) {
  if (wordIndex === word.length - 1) {
    return true
  }
  const curMap = {
    ...prevMap,
    [`${i}-${j}`]: 1
  }
  let nextIndex = wordIndex + 1;
  let nextLetter = word[nextIndex];
  for (let x = 0; x < posArr.length; x++) {
    let nextI = i + posArr[x][0];
    let nextJ = j + posArr[x][1]
    if (find(board, nextI, nextJ, nextLetter, curMap)) {
      if (findPath(board, nextI, nextJ, word, nextIndex, curMap)) {
        return true
      }
    }
  }
  return false
}

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (findPath(board, i, j, word, 0, {})) {
          return true
        }
      }
    }
  }
  return false
};

function test() {
  let fun = exist;
  let params = [
    // [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    // "ABCCED"
    // [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    // "SEE"
    [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    "ABCB"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()