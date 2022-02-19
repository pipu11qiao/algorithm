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
  let allPoint = [{
    row,
    col: column,
    rate: 1
  }];
  let i = 0;
  while (i < k) {
    const arr = [];
    allPoint.forEach(item => {
      const pointArr = getPoint(item.row, item.col, n)
      pointArr.forEach(_item => {
        arr.push({
          row: _item[0],
          col: _item[1],
          rate: item.rate * 1 / 8
        })
      })
    })
    // console.log(`arr`, arr);
    if (arr.length === 0) {
      return [{
        row,
        col: column,
        rate: 0
      }]
    }

    let map = {};
    arr.forEach(item => {
      let key = `${item.row}-${item.col}`;
      if (map[key] === undefined) {
        map[key] = 0
      }
      map[key] += item.rate
    })
    // console.log(`map`, map);
    allPoint = Object.keys(map).map(key => {
      const [_row, _col] = key.split('-');
      return {
        row: Number(_row),
        col: Number(_col),
        rate: map[key]
      }
    });
    // console.log(`allPoint`, allPoint);
    i++;
  }
  return allPoint;
}
var knightProbability = function (n, k, row, column) {
  const res = fun(n, k, row, column)
  // console.log(`res`, res);
  let rate = 0;
  res.forEach(item => {
    rate += item.rate
  })
  return rate
};

function test() {
  // const res = knightProbability(3, 2, 0, 0);
  // const res = knightProbability(1, 0, 0, 0);
  // const res = knightProbability(1, 1, 0, 0);
  const res = knightProbability(8, 30, 6, 4);
  console.log(`res`, res);
}
test()