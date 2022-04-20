/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let visitMap = {};
  let m = grid.length;
  let n = grid[0].length;
  let count = 0
  function dfs(i, j) {
    if (visitMap[`${i}-${j}`]) {
      return
    }
    visitMap[`${i}-${j}`] = 1

    if (i > 0 && grid[i - 1][j] === '1') {
      dfs(i - 1, j)
    }
    if (j > 0 && grid[i][j - 1] === '1') {
      dfs(i, j - 1)
    }
    if (i < m - 1 && grid[i + 1][j] === '1') {
      dfs(i + 1, j)
    }
    if (j < n - 1 && grid[i][j + 1] === '1') {
      dfs(i, j + 1)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curNum = grid[i][j];
      if (curNum === '1' && !visitMap[`${i}-${j}`]) {
        count++
        dfs(i, j)
      }
    }
  }
  return count
};

function test() {
  let fun = numIslands;
  let params = [
    // [
    //   ["1", "1", "1", "1", "0"],
    //   ["1", "1", "0", "1", "0"],
    //   ["1", "1", "0", "0", "0"],
    //   ["0", "0", "0", "0", "0"]
    // ]
    // [
    //   ["1", "1", "0", "0", "0"],
    //   ["1", "1", "0", "0", "0"],
    //   ["0", "0", "1", "0", "0"],
    //   ["0", "0", "0", "1", "1"]
    // ]
    [
      ["1", "1", "1"],
      ["0", "1", "0"],
      ["1", "1", "1"]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()