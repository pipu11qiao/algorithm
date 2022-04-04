"use strict";

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function getBitCount(num) {
  var count = 0;

  while (num) {
    if (num & 1 === 1) {
      count++;
    }

    num = num >> 1;
  }

  return count;
}

function isPrme(num) {
  if (num === 0) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (var i = 2; i < num; i++) {
    if (Number % i === 0) {
      return false;
    }
  }

  return true;
}

var countPrimeSetBits = function countPrimeSetBits(left, right) {
  var res = 0;
  var map = {};

  for (var i = left; i <= right; i++) {
    var count = getBitCount(i);

    if (map[count] === undefined) {
      map[count] = - -isPrme(count);
    }

    res += map[count];
  }

  ret;
};

function test() {
  var fun = countPrimeSetBits;
  var params = [6, 10];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();