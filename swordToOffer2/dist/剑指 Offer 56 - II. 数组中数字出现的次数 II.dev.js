"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function singleNumber(nums) {
  var bitArray = new Array(31).fill(0);
  nums.forEach(function (item) {
    for (var i = 1; i <= 31; i++) {
      if (item >> i & 1 === 1) {
        bitArray[i - 1]++;
      }
    }
  });
  bitArray = (_readOnlyError("bitArray"), bitArray.map(function (item) {
    return item % 3;
  }));
  return parseInt(bitArray.join('', 2));
};

function test() {
  var fun = singleNumber;
  var params = [[3, 4, 3, 3]];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();