/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let mLen = matrix.length;
  let nLen = matrix[0].length;
  let sumMatrix = [];
  for (let i = 0; i < mLen; i++) {
    sumMatrix[i] = [0];
    let sum = 0;
    for (let j = 0; j < nLen; j++) {
      sum += matrix[i][j];
      sumMatrix[i].push(sum);
    }
  }
  this.sumMatrix = sumMatrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let res = 0;
  for (let i = row1; i <= row2; i++) {
    res += this.sumMatrix[i][col2 + 1] - this.sumMatrix[i][col1];
  }
  return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
