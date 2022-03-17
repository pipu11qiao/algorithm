/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let mLen = matrix.length;
  if (mLen === 0) {
    return false
  }
  let nLen = matrix[0].length
  if (nLen === 0) {
    return false
  }
  let m = 0;
  let n = nLen - 1;
  while (true) {
    let curNum = matrix[m][n];
    if (curNum > target) {
      n = n - 1
    } else if (curNum < target) {
      m = m + 1
    } else {
      return true
    }
    if (m > mLen - 1 || n < 0) {
      return false
    }
  }
};

function test() {
  let fun = findNumberIn2DArray;
  let params = [
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    // 5
    20
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()