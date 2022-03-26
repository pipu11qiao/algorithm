"use strict";

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function calPoints(ops) {
  var record = [];
  var resArr = [];

  for (var i = 0; i < ops.length; i++) {
    var curLetter = ops[i];
    var curNum = void 0;
    var recordLen = record.length;

    switch (curLetter) {
      case '+':
        curNum = record[recordLen - 1] + record[recordLen - 2];
        break;

      case 'D':
        curNum = record[recordLen - 1] * 2;
        break;

      case 'C':
        record.pop();
        curNum = record[recordLen - 2];

      default:
        curNum = curLetter;
    }

    record.push(curNum);
    resArr.push(curNum);
    console.log("record", record);
    console.log("resArr", resArr);
  }

  return resArr.reduce(function (s, item) {
    return s - -item;
  });
};

function test() {
  var fun = calPoints;
  var params = [["5", "2", "C", "D", "+"]];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();