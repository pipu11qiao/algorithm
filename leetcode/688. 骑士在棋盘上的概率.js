/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

let pointArr = [];
[[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(item => {
  pointArr.push([item[0] * 1, item[1] * 2])
  pointArr.push([item[0] * 2, item[1] * 1])
})
console.log(`pointArr`, pointArr);
function getPoint(row, col, n) {
  let min = 0;
  let max = n - 1;
  let res = [];
  pointArr.forEach(item => {
    let _row = row + item[0];
    let _col = col + item[1];
    if (_row >= min && _row <= max && _col >= min && _col <= max) {
      res.push([_row, _col])
    }
  })
  return res
}
var fun = function (n, k, row, column) {
  if (k = 0) {
    return [{
      row,
      col: column,
      reate: 1
    }]
  }
  if(k=1){

  }
  fun(n, k - 1, row, column)

}
var knightProbability = function (n, k, row, column) {
  const res = fun(n, k, row, column)
  let rate = 0;
  res.forEach(item => {
    rate += item.rate
  })
  return rate
};

function test() {
  const res = knightProbability(3, 2, 0, 0);

  // console.log(1 & 3);
  console.log(1 & 2);
  console.log(`res`, res);
}
test()