"use strict";

/**
 * @param {number} n
 * @return {number}
 */
// var binaryGap = function (n) {
//   let res = 0;
//   let r = -1
//   let index = 0
//   while (n > 0) {
//     if (n & 1 === 1) {
//       if (r !== -1) {
//         res = Math.max(index - r, res)
//       }
//       r = index
//     }
//     index++
//     n >>= 1
//   }
//   return res
// };
var binaryGap = function binaryGap(n) {
  var arr = n.toString(2).match(/11/g);
  console.log("arr", arr);

  if (arr) {
    return Math.max.apply(Math, arr.map(function (item) {
      return item.length - 1;
    }));
  }

  return 0;
};

function test() {
  var fun = binaryGap;
  var params = [15];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();