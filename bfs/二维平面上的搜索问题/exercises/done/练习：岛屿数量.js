/**
 * @param {character[][]} grid
 * @return {number}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const visitedMap = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visitedMap[`${i}-${j}`]) {
        visitedMap[`${i}-${j}`] = 1;
        bfs([[i, j]])
        res++
      }
    }
  }
  function bfs(queue) {
    while (queue.length > 0) {
      const pos = queue.shift();
      dirArr.forEach(dirObj => {
        const nextI = pos[0] + dirObj[0];
        const nextJ = pos[1] + dirObj[1];
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (grid[nextI][nextJ] === '1' && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1
            queue.push([nextI, nextJ])
          }
        }
      })
    }
  }
  return res

};

function test() {
  let fun = numIslands;
  let params = [
    [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()