/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let rowMinArr = [];
  for (let r = 0; r < rowLen; r++) {
    let max = {
      v: Number.POSITIVE_INFINITY,
      i: -1
    }
    for (let c = 0; c < colLen; c++) {
      const num = matrix[r][c];
      if (num < max.v) {
        max = {
          v: num,
          i: c
        }
      }
    }
    rowMinArr.push(max)
  }
  let colMaxArr = [];
  for (let c = 0; c < colLen; c++) {
    let min = {
      v: Number.NEGATIVE_INFINITY,
      i: -1
    }
    for (let r = 0; r < rowLen; r++) {
      const num = matrix[r][c];
      if (num > min.v) {
        min = {
          v: num,
          i: r
        }
      }
    }
    colMaxArr.push(min)
  }
  let res = []
  for (let i = 0; i < rowLen; i++) {
    let rowMax = rowMinArr[i];
    let colIndex = rowMax.i;
    if (rowMax.v === colMaxArr[colIndex].v) {
      res.push(rowMax.v)
    }
  }
  return res

};

function test() {
  let fun = luckyNumbers;
  const matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]
  let params = [
    matrix
  ];



  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()