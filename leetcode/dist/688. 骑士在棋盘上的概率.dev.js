"use strict";

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var pointArr = [];
[[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(function (item) {
  pointArr.push([item[0] * 1, item[1] * 2]);
  pointArr.push([item[0] * 2, item[1] * 1]);
});

function getPoint(row, col, n) {
  var min = 0;
  var max = n - 1;
  var res = [];
  pointArr.forEach(function (item) {
    var _row = row + item[0];

    var _col = col + item[1];

    if (_row >= min && _row <= max && _col >= min && _col <= max) {
      res.push([_row, _col]);
    }
  });
  return res;
}

var fun = function fun(n, k, row, column) {
  if (k === 0) {
    return [{
      row: row,
      col: column,
      reate: 1
    }];
  }

  if (k === 1) {
    var _pointArr = getPoint(row, column, n);

    if (_pointArr.length === 0) {
      return [{
        row: row,
        col: column,
        reate: 0
      }];
    }

    return _pointArr.map(function (item) {
      return {
        row: item[0],
        col: item[1],
        rate: 1 / 8
      };
    });
  }

  var res = fun(n, k - 1, row, column);

  if (res.every(function (item) {
    return item.rate === 0;
  })) {
    return [{
      row: row,
      col: column,
      reate: 0
    }];
  } else {
    var arr = [];
    res.forEach(function (item) {
      var pointArr = getPoint(item.row, item.col, n);
      pointArr.forEach(function (_item) {
        arr.push({
          row: _item[0],
          col: _item[1],
          rate: item.rate * 1 / 8
        });
      });
    });
    return arr;
  }
};

var knightProbability = function knightProbability(n, k, row, column) {
  var res = fun(n, k, row, column);
  var rate = 0;
  res.forEach(function (item) {
    rate += item.rate;
  });
  return rate;
};

function test() {
  var res = knightProbability(3, 2, 0, 0);
  console.log("res", res);
}

test();