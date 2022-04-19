/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function swap(matrix, r1, c1, r2, c2) {
  const tmp = matrix[r1][c1];
  matrix[r1][c1] = matrix[r2][c2];
  matrix[r2][c2] = tmp;
}
function rotateCicle(matrix, rowStart, rowEnd, colStart, colEnd) {
  let tmp = [];
  for (let i = colEnd; i >= colStart; i--) {
    tmp.push(matrix[rowStart][i]);
  }
  // 上
  for (let i = colEnd; i > colStart; i--) {
    swap(matrix, rowStart, i, rowEnd - i + rowStart, colStart)
  }
  // 左
  for (let i = rowStart; i < rowEnd; i++) {
    swap(matrix, i, colStart, rowEnd, i)
  }
  // 下
  for (let i = colStart; i < colEnd; i++) {
    swap(matrix, rowEnd, i, rowEnd - i + colStart, colEnd)
  }
  // 右
  for (let i = rowEnd; i > rowStart; i--) {
    matrix[i][colEnd] = tmp.shift()
  }
}
var rotate = function (matrix) {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    rotateCicle(matrix, left, right, left, right)
    left++;
    right--;
  }
};

function test() {
  let fun = rotate;
  let params = [
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`params[0]`, params[0]);
}
test()