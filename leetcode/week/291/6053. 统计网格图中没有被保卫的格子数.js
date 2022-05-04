/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let gridArr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  walls.forEach(([r, c]) => {
    gridArr[r][c] = 3
  })
  guards.forEach(([r, c]) => {
    gridArr[r][c] = 2
  })
  // 0 代表是好的 1代表被守卫 2 表示守卫 3表示墙
  for (let i = 0; i < m; i++) {
    let left = 0;
    let hasG = false;
    for (let right = 0; right <= n; right++) {
      const curNum = gridArr[i][right]
      if (curNum === 2) {
        hasG = true
      } else if (right === n || curNum === 3) {
        if (hasG) {
          // 从left到right都被守卫
          for (let j = left; j <= right; j++) {
            if (gridArr[i][j] === 0) {
              gridArr[i][j] = 1
            }
          }
        }
        left = right
        hasG = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let left = 0;
    let hasG = false;
    for (let right = 0; right <= m; right++) {
      const curNum = gridArr[right] ? gridArr[right][i] : undefined
      if (curNum === 2) {
        hasG = true
      } else if (right === m || curNum === 3) {
        if (hasG) {
          // 从left到right都被守卫
          for (let j = left; j <= right; j++) {
            if (gridArr[j] && gridArr[j][i] === 0) {
              gridArr[j][i] = 1
            }
          }
        }
        left = right
        hasG = false;
      }
    }
  }
  let count = 0
  gridArr.forEach(arr => {
    arr.forEach(item => {
      if (item === 0) {
        count++
      }
    })
  })
  return count

};

function test() {
  let fun = countUnguarded;
  let params = [
    4, 6, [[0, 0], [1, 1], [2, 3]], [[0, 1], [2, 2], [1, 4]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()