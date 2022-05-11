/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = {}; // key: r-c,value: []左括号多的数量
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const isLeft = grid[r][c] === '(';
      let key = `${r}-${c}`;
      if (r === 0 && c === 0) {
        if (isLeft) {
          dp[key] = [1];
        } else {
          return false
        }
      } else {
        let res = [];
        let left = grid[r][c - 1]
        let tmp = [];
        if (left && dp[`${r}-${c - 1}`]) {
          tmp = [...dp[`${r}-${c - 1}`]]
        }
        let top = grid[r - 1] ? grid[r - 1][c] : undefined
        if (top && dp[`${r - 1}-${c}`]) {
          tmp = [...tmp, ...dp[`${r - 1}-${c}`]]
        }

        tmp.forEach(leftCount => {
          if (isLeft) {
            res.push(leftCount + 1)
          } else {
            if (leftCount > 0) {
              res.push(leftCount - 1)
            }

          }
        })
        dp[key] = res.length > 0 ? [...new Set(res)] : null
      }
    }
  }

  let last = dp[`${m - 1}-${n - 1}`];
  // console.log(`dp`, dp);
  if (last) {
    return last.some(item => item === 0)
  } else {
    return false
  }
};

function test() {
  let fun = hasValidPath;
  let params = [
    // [["(", "(", "("], [")", "(", ")"], ["(", "(", ")"], ["(", "(", ")"]]
    // [[")", ")"], ["(", "("]]
    [["(", ")", ")", "(", ")", ")", ")"]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()