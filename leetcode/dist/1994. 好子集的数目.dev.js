"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {number[]} nums
 * @return {number}
 */
var singlePrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(function (item) {
  return {
    value: item,
    key: [item]
  };
});
var singlePrimeMap = {};
singlePrime.forEach(function (item) {
  singlePrimeMap[item.value] = item;
});
var twoPrime = [];
var twoPrimeMap = {};
var threePrime = [{
  value: 30,
  key: [2, 3, 5]
}];

function cFun(m, n) {
  var denominator = 1;
  var d = n;

  while (d > 1) {
    denominator *= d;
    d--;
  }

  var molecule = 1;

  for (var i = 0; i < n; i++) {
    molecule *= m;
    m--;
  }

  var num = molecule / denominator;

  if (isNaN(num)) {
    console.log("molecule", molecule);
    console.log("denominator", denominator);
  }

  return num;
}

function getOneCount(count) {
  var res = 0;
  console.log("count", count);

  for (var i = 1; i <= count; i++) {
    var num = cFun(count, i);
    res += num;
  }

  return res;
}

for (var i = 0; i <= 1; i++) {
  var num1 = i === 0 ? 2 : 3;

  for (var n = i + 1; n < singlePrime.length; n++) {
    var num = singlePrime[n].value;

    if (num1 * num <= 30) {
      twoPrime.push({
        value: num * num1,
        key: [num1, num]
      });
    }
  }
}

var threePrimeMap = {
  30: threePrime[0]
};
twoPrime.forEach(function (item) {
  twoPrimeMap[item.value] = item;
});

var numberOfGoodSubsets = function numberOfGoodSubsets(nums) {
  var curSinglePrimeMap = {};
  var curTwoPrimeMap = {};
  var curThreePrimeMap = {};
  var res = 0;
  var oneCount = 0;

  for (var _i = 0; _i < nums.length; _i++) {
    var curNum = nums[_i];

    if (curNum === 1) {
      oneCount++;
    } else if (curNum === 30) {
      if (curThreePrimeMap[curNum] === undefined) {
        curThreePrimeMap[curNum] = 0;
      }

      curThreePrimeMap[curNum]++;
    } else if (singlePrimeMap[curNum]) {
      if (curSinglePrimeMap[curNum] === undefined) {
        curSinglePrimeMap[curNum] = 0;
      }

      curSinglePrimeMap[curNum]++;
    } else if (twoPrimeMap[curNum]) {
      if (curTwoPrimeMap[curNum] === undefined) {
        curTwoPrimeMap[curNum] = 0;
      }

      curTwoPrimeMap[curNum]++;
    }
  } // 收集所有包含的单质数，双和三的拆开


  var allPrimeMap = {};
  [].concat(_toConsumableArray(Object.keys(curSinglePrimeMap).map(function (num) {
    return singlePrimeMap[num];
  })), _toConsumableArray(Object.keys(curTwoPrimeMap).map(function (num) {
    return twoPrimeMap[num];
  })), _toConsumableArray(Object.keys(curThreePrimeMap).map(function (num) {
    return threePrimeMap[num];
  }))).forEach(function (item) {
    item.key.forEach(function (n) {
      allPrimeMap[n] = 1;
    });
  });
  var len = Object.keys(allPrimeMap).length;

  if (len === 0) {
    return res;
  }

  var dp = [];
  var allMap = {};

  function select(originArr, selectMap, originMap, dpArr) {
    originArr.forEach(function (item) {
      Object.keys(selectMap).forEach(function (num) {
        var key = originMap[num].key;

        if (key.every(function (_num) {
          return item.key.indexOf(_num) === -1;
        })) {
          var count = item.count * selectMap[num];
          var numArr = [].concat(_toConsumableArray(item.num), [Number(num)]).sort(function (a, b) {
            return a - b;
          });
          var keyStr = numArr.join(',');

          if (!allMap[keyStr]) {
            dpArr.push({
              num: numArr,
              key: [].concat(_toConsumableArray(item.key), _toConsumableArray(key)).sort(function (a, b) {
                return a - b;
              }),
              count: count
            });
            res += count;
            allMap[keyStr] = 1;
          }
        }
      });
    });
  }

  var _loop = function _loop(_i2) {
    dp[_i2] = []; // fn-1 fn-2 fn-3

    if (_i2 > 2 && dp[_i2 - 1].length === 0 && dp[_i2 - 2].length === 0 && dp[_i2 - 3].length === 0) {
      return "break";
    } // fn-1 map1


    dp[_i2 - 1] && dp[_i2 - 1].length > 0 && select(dp[_i2 - 1], curSinglePrimeMap, singlePrimeMap, dp[_i2]); // fn-2 map2

    dp[_i2 - 2] && dp[_i2 - 2].length > 0 && select(dp[_i2 - 2], curTwoPrimeMap, twoPrimeMap, dp[_i2]); // fn-3 map3

    dp[_i2 - 3] && dp[_i2 - 3].length > 0 && select(dp[_i2 - 3], curThreePrimeMap, threePrimeMap, dp[_i2]);

    if (_i2 === 0 || _i2 === 1 || _i2 === 2) {
      var curMap = curSinglePrimeMap;
      var originMap = singlePrimeMap;

      if (_i2 === 1) {
        curMap = curTwoPrimeMap;
        originMap = twoPrimeMap;
      }

      if (_i2 === 2) {
        curMap = curThreePrimeMap;
        originMap = threePrimeMap;
      }

      Object.keys(curMap).forEach(function (num) {
        var count = curMap[num];

        dp[_i2].push({
          num: [Number(num)],
          key: originMap[num].key,
          count: count
        });

        res += count;
      });
    }
  };

  for (var _i2 = 0; _i2 < len; _i2++) {
    var _ret = _loop(_i2);

    if (_ret === "break") break;
  }

  if (oneCount > 0) {
    var oneSelectCount = getOneCount(oneCount);
    console.log("oneSelectCount", oneSelectCount); // res += res * oneSelectCount
  }

  console.log("dp", JSON.stringify(dp));
  console.log("res", res);
  return res % (Math.pow(10, 9) + 7);
};

function test() {
  var fun = numberOfGoodSubsets;
  var params = [[1, 26, 1, 1, 21, 1, 3, 13, 1, 1, 1, 26, 29, 29, 6, 10, 29, 1, 1, 11, 15, 6, 14, 1, 17, 1, 1, 30, 21, 1, 17, 1, 1, 1, 23, 1, 7, 17, 15, 1, 1, 1, 14, 22, 11, 22, 17, 1, 19, 1, 2, 21, 29, 1, 22, 1, 1, 14, 22, 1, 14, 1, 1, 1, 1, 17, 1, 1, 1, 3, 1, 14, 19, 1, 1, 1, 1, 21, 26, 1, 1, 1, 13, 1, 1, 30, 21, 1, 1, 1, 1, 7, 1, 1, 7, 13, 6, 1, 29, 29, 1, 1, 23, 1, 19, 10, 10, 1, 1, 2, 1, 1, 23, 15, 5, 15, 1, 1, 19, 15, 1, 1, 14, 1, 7, 26, 1, 1, 2, 13, 19, 1, 3, 22, 1, 1, 29, 1, 7, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 2, 17, 1, 1, 1, 1, 1, 19, 5, 1, 1, 1, 19, 30, 23, 1, 1, 2, 1, 1, 7, 17, 1, 1, 1, 30, 21, 1, 3, 1, 5, 15, 1, 26, 1, 1, 21, 22, 19, 1, 13, 6, 15, 19, 2, 1, 1, 1, 1, 11, 17, 21, 29, 23, 26, 10, 1, 30, 1, 14, 1, 1, 21, 1, 30, 1, 1, 1, 11, 22, 19, 21, 30, 11, 14, 1, 1, 3, 7, 17, 10, 10, 3, 1, 1, 1, 10, 1, 15, 1, 15, 15, 1, 1, 1, 1, 1, 21, 14, 6, 1, 17, 1, 1, 1, 17, 10, 3, 1, 22, 21, 1, 1, 23, 19, 1, 5, 5, 5, 10, 1, 29, 1, 1, 1, 1, 7, 1, 15, 1, 6, 6, 1, 1, 1, 13, 1, 1, 29, 17, 1, 1, 1, 6, 1, 1, 2, 13, 10, 29, 1, 13, 21, 7, 10, 1, 1, 1, 7, 29, 15, 29, 17, 5, 30, 1, 11, 1, 23, 1, 1, 1, 5, 1, 30, 6, 1, 5, 6, 1, 11, 17, 26, 1, 1, 13, 1, 26, 1, 11, 13, 1, 11, 1, 1, 1, 30, 1, 1, 1, 14, 19, 1, 1, 15, 21, 1, 1, 2, 1, 1, 19, 1, 26, 1, 5, 22, 13, 1, 1, 11, 7, 29, 3, 26, 30, 19, 10, 1, 7, 1, 22, 1, 6, 2, 1, 23, 26, 1, 11, 11, 5, 1, 1, 1, 5, 6, 7, 21, 1, 1, 10, 1, 1, 29, 1, 1, 6, 19, 1, 1, 5, 1, 30, 1, 15, 1, 3, 15, 15, 23, 6, 1, 5, 1, 1, 1, 1, 3, 1, 1, 17, 7, 1, 11, 6, 13, 2, 17, 1, 3, 1, 22, 1, 1, 23, 13, 1, 3, 1, 1, 1, 1, 13, 22, 1, 22, 1, 10, 1, 23, 15, 14, 1, 30, 1, 1, 29, 17, 3, 1, 19, 1, 7, 14, 2, 1, 14, 23, 2, 30, 1, 19, 1, 1, 10, 19, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 26, 30, 26, 1, 2, 2, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22, 15, 21, 15, 13, 26, 1, 1, 1, 1, 21, 1, 13, 30, 1, 22, 1, 14, 1, 21, 15, 14, 21, 1, 22, 1, 1, 1, 11, 1, 6, 6, 1, 1, 1, 13, 3, 10, 23, 15, 30, 1, 1, 7, 19, 7, 1, 30, 15, 1, 7, 1, 11, 2, 17, 14, 17, 21, 1, 1, 17, 1, 3, 23, 1, 1, 11, 21, 1, 1, 1, 1, 10, 1, 11, 1, 1, 1, 1, 6, 22, 1, 1, 6, 26, 23, 1, 1, 11, 10, 1, 6, 6, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22, 1, 19, 13, 1, 1, 2, 10, 1, 26, 1, 1, 5, 3, 10, 13, 11, 17, 1, 1, 23, 1, 7, 5, 1, 1, 11, 22, 1, 23, 1, 1, 1, 29, 26, 2, 1, 19, 15, 13, 29, 1, 1, 19, 26, 1, 11, 26, 11, 1, 6, 1, 1, 26, 21, 3, 2, 1, 1, 10, 1, 1, 21, 15, 1, 1, 23, 1, 2, 5, 1, 3, 1, 1, 1, 14, 5, 1, 21, 1, 30, 11, 5, 21, 14, 14, 1, 1, 19, 10, 1, 1, 1, 1, 22, 14, 1, 7, 23, 1, 29, 23, 1, 1, 1, 17, 1, 1, 1, 15, 17, 22, 26, 1, 1, 1, 1, 1, 13, 13, 11, 1, 1, 1, 1, 5, 10, 1, 1, 1, 15, 1, 5, 1, 1, 1, 22, 1, 15, 11, 1, 1, 1, 13, 1, 1, 13, 1, 23, 1, 1, 6, 1, 6, 1, 1, 19, 1, 17, 1, 13, 1, 22, 1, 1, 1, 1, 13, 6, 1, 1, 1, 19, 7, 1, 23, 1, 1, 21, 1, 1, 6, 1, 3, 29, 21, 15, 1, 1, 1, 1, 1, 1, 1, 14, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 21, 11, 17, 23, 30, 1, 30, 3, 11, 1, 1, 1, 1, 22, 2, 1, 1, 11, 6, 23, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 1, 23, 21, 3, 19, 1, 1, 26, 30, 1, 1, 1, 30, 1, 1, 1, 5, 1, 1, 1, 1, 29, 1, 7, 1, 1, 2, 1, 30, 7, 17, 7, 13, 1, 1, 29, 1, 1, 1, 1, 26, 1, 1, 6, 13, 1, 1, 1, 11, 1, 30, 1, 14, 11, 30, 1, 1, 1, 1, 1, 14, 1, 26, 6, 26, 1, 7, 23, 1, 11, 13, 2, 23, 1, 7, 22, 1, 1, 1, 5, 22, 15, 1, 11, 1, 21, 1, 1, 13, 26, 30, 1, 22, 1, 1, 14, 29, 1, 1, 1, 1, 1, 30, 2, 1, 1, 29, 1, 1, 3, 21, 11, 1, 3, 22, 5, 6, 10, 1, 1, 1, 1, 26, 11, 1, 22, 14, 1, 14, 1, 21, 1, 10, 23, 1, 13, 1, 29, 19, 1, 14, 1, 22, 1, 1, 1, 1, 29, 29, 3, 1, 1, 19, 10, 5, 1, 1, 1, 22, 1, 1, 14, 2, 1, 1, 1, 1, 23, 1, 6, 1, 1, 2, 1, 15, 10, 3, 22, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 1, 1, 6, 30, 1, 17, 1, 1, 2, 1, 1, 5, 1, 1, 19, 10, 29, 22, 1, 10, 3, 1, 6, 1, 7, 13, 1, 3, 29, 1, 1, 1, 1, 26, 1, 1, 1, 21, 1, 29, 1, 1, 5, 1, 1, 5, 1, 1, 13, 1, 1, 1, 1, 1, 1, 22, 1, 1, 5, 1, 2, 30, 1, 14, 1, 1, 5, 1, 11, 1, 14, 11, 1, 13, 15, 11, 1, 1, 29, 5, 26, 26, 1, 1, 1, 14, 1, 1, 1, 10, 1, 1, 30, 30, 1, 6, 2, 1, 5, 1, 1, 1, 19, 13, 3, 10, 1, 1, 1, 3, 1, 1, 1, 1, 1, 15, 1, 13, 2, 1, 1, 1, 1, 6, 11, 1, 1, 1, 1, 23, 17, 22, 15, 1, 1, 3, 19, 10, 1, 7, 1, 23, 1, 1, 1, 15, 23, 11, 1, 22, 1, 19, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 5, 19, 6, 30, 1, 6, 14, 1, 1, 1, 10, 1, 7, 1, 5, 1, 1, 1, 1, 1, 15, 1, 17, 7, 7, 29, 23, 26, 6, 3, 10, 3, 2, 10, 1, 5, 22, 1, 1, 1, 1, 1, 1, 2, 30, 26, 21, 1, 1, 1, 1, 1, 1, 29, 1, 7, 1, 11, 17, 1, 6, 6, 7, 1, 17, 22, 1, 17, 1, 26, 1, 1, 23, 1, 1, 1, 1, 1, 1, 1, 19, 1, 7, 1, 2, 30, 1, 1, 30, 17, 1, 1, 21, 30, 29, 1, 1, 1, 7, 26, 1, 14, 1, 1, 5, 1, 3, 7, 1, 1, 1, 10, 1, 15, 1, 1, 1, 1, 15, 1, 11, 1, 1, 1, 1, 29, 13, 23, 10, 1, 1, 1, 1, 5, 13, 1, 1, 1, 1, 26, 1, 1, 17, 1, 1, 1, 19, 26, 1, 1, 1, 22, 1, 23, 13, 19, 1, 29, 1, 1, 29, 30, 5, 1, 2, 1, 23, 5, 26, 1, 1, 1, 10, 1, 21, 22, 15, 1, 3, 1, 1, 1, 15, 1, 2, 1, 1, 22, 29, 1, 1, 1, 17, 19, 19, 1, 3, 1, 1, 1, 1, 22, 3, 1, 1, 6, 1, 3, 1, 1, 10, 21, 1, 1, 21, 6, 1, 1, 1, 13, 2, 5, 3, 1, 15, 15, 22, 1, 1, 1, 2, 1, 2, 3, 1, 14, 1, 1, 10, 1, 26, 13, 6, 13, 23, 14, 1, 14, 1, 3, 17, 7, 1, 17, 1, 1, 17, 1, 26, 30, 30, 10, 22, 1, 1, 3, 5, 21, 1, 1, 14, 1, 1, 1, 1, 5, 26, 1, 29, 19, 17, 23, 23, 11, 1, 7, 2, 15, 14, 1, 19, 1, 13, 1, 15, 14, 1, 29, 2, 1, 2, 26, 5, 19, 1, 14, 21, 19, 1, 1, 1, 1, 21, 1, 1, 1, 1, 1, 29, 14, 1, 1, 1, 1, 7, 1, 15, 1, 21, 13, 1, 1, 13, 1, 15, 1, 6, 1, 1, 1, 1, 1, 2, 7, 1, 1, 26, 14, 3, 1, 1, 1, 1, 1, 30, 10, 1, 21, 13, 1, 1, 1, 17, 1, 19, 11, 1, 1, 1, 29, 13, 1, 1, 30, 1, 30, 1, 19, 10, 22, 10, 6, 1, 21, 15, 1, 22, 1, 1, 29, 26, 1, 19, 1, 7, 1, 1, 17, 15, 1, 7, 1, 1, 10, 22, 13, 1, 22, 1, 1, 17, 1, 26, 1, 1, 11, 1, 17, 1, 26, 1, 1, 11, 6, 1, 1, 3, 1, 3, 6, 2, 1, 1, 29, 1, 3, 13, 17, 30, 1, 1, 30, 1, 1, 1, 1, 2, 1, 1, 29, 1, 1, 14, 5, 1, 14, 5, 1, 1, 2, 2, 14, 23, 5, 10, 19, 10, 1, 1, 1, 1, 22, 1, 21, 3, 23, 1, 1, 1, 1, 15, 1, 26, 6, 1, 30, 10, 7, 15, 1, 1, 1, 1, 10, 19, 1, 2, 1, 1, 26, 1, 1, 2, 21, 1, 22, 23, 5, 29, 1, 1, 1, 30, 14, 1, 1, 1, 5, 1, 1, 1, 1, 1, 6, 1, 1, 6, 2, 1, 1, 7, 1, 1, 21, 15, 11, 1, 30, 23, 1, 1, 1, 1, 1, 17, 1, 1, 15, 1, 1, 17, 15, 10, 3, 1, 17, 1, 1, 30, 30, 1, 11, 3, 1, 1, 22, 1, 11, 2, 29, 1, 22, 14, 1, 29, 17, 2, 19, 1, 1, 1, 1, 1, 23, 3, 23, 26, 1, 6, 1, 1, 2, 3, 26, 10, 1, 7, 1, 7, 1, 5, 7, 15, 21, 1, 6, 5, 23, 7, 5, 19, 3, 11, 17, 1, 10, 1, 1, 1, 7, 1, 1, 1, 1, 29, 1, 14, 29, 1, 1, 5, 30, 1, 11, 29, 14, 19, 1, 1, 5, 1, 22, 1, 1, 7, 6, 26, 3, 21, 1, 30, 1, 13, 1, 1, 5, 1, 1, 29, 1, 1, 29, 1, 21, 1, 14, 14, 1, 29, 14, 1, 1, 14, 1, 1, 13, 26, 15, 1, 1, 23, 10, 30, 1, 1, 17, 1, 1, 1, 1, 1, 17, 2, 1, 5, 13, 23, 1, 7, 14, 1, 3, 14, 1, 1, 7, 23, 1, 23, 6, 15, 17, 1, 19, 1, 1, 17, 1, 11, 1, 19, 10, 17, 21, 1, 1, 1, 7, 1, 11, 1, 13, 1, 1, 22, 22, 7, 26, 1, 2, 21, 19, 19, 1, 30, 11, 23, 17, 1, 19, 10, 1, 29, 1, 7, 15, 1, 1, 21, 23, 11, 6, 2, 11, 30, 1, 26, 1, 2, 13, 26, 6, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 1, 1, 1, 1, 1, 1, 1, 13, 1] // [1, 2, 3, 4]
  // [4,2,3,15]
  // [4, 15, 22, 26, 30]
  ];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();