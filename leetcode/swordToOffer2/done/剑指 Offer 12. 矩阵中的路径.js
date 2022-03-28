/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let directionArr = [
  [1, 0], [-1, 0], [0, 1], [0, -1]
];
function findOk(board, m, n, usedMap, word, index) {
  if (index >= word.length) {
    return true
  }
  let curKey = `${m}-${n}`
  let nextLetter = word[index]
  if (
    (m < 0 || m >= board.length || n < 0 || n >= board[0].length)
    ||
    (usedMap[curKey])
  ) {
    return false
  }
  if (board[m][n] === nextLetter) {
    for (let i = 0; i < directionArr.length; i++) {
      const nextM = m + directionArr[i][0]
      const nextN = n + directionArr[i][1]
      if (findOk(board, nextM, nextN, { ...usedMap, [curKey]: 1 }, word, index + 1)) {
        return true
      }
    }
  }
  return false

}
var exist = function (board, word) {
  const mLen = board.length;
  const nLen = board[0].length;
  let allMap = {}
  for (let m = 0; m < mLen; m++) {
    for (let n = 0; n < nLen; n++) {
      const cur = board[m][n];
      if (!allMap[cur]) {
        allMap[cur] = [];
      }
      allMap[cur].push(`${m}-${n}`)
    }
  }
  if (word.split('').some(item => !allMap[item])) {
    return false
  }
  let firstL = word[0];
  for (let i = 0; i < allMap[firstL].length; i++) {
    const [m, n] = allMap[firstL][i].split('-');
    if (findOk(board, -(-m), -(-n), {}, word, 0)) {
      return true
    }
  }
  return false
};

function test() {
  let fun = exist;
  let params = [
    // [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"
    // [["a", "b"], ["c", "d"]], "abcd"
    [["a", "b"]], "ab"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()