"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
function getOrderArr(security, time, isAscend) {
  var len = security.length;
  var ascendArr = [];

  for (var i = 0; i < len;) {
    var s = i;
    var e = i;
    var cur = security[i];
    var nextI = i + 1;

    while (nextI < len) {
      var next = security[nextI];

      if (isAscend ? next >= cur : next <= cur) {
        e = nextI;
        nextI++;
      } else {
        if (e - s + 1 > time) {
          // ascendArr.push([isAscend ? s : s + 2, isAscend ? e - time : e]);
          ascendArr.push([s, e]);
        }

        break;
      }
    }

    i = nextI;
    console.log("i", i);
  }

  return ascendArr;
}

var goodDaysToRobBank = function goodDaysToRobBank(security, time) {
  if (time === 0) {
    return security.map(function (_, i) {
      return i;
    });
  }

  var len = security.length; // 递增

  var ascendArr = getOrderArr(security, time, true);

  if (ascendArr.length === 0) {
    return [];
  }

  console.log("ascendArr", ascendArr);
  return []; // 递减

  var descendArr = getOrderArr(security, time, false);

  if (descendArr.length === 0) {
    return [];
  }

  var i = 0;
  var j = 0;
  var res = [];

  while (i < descendArr.length && j < ascendArr.length) {
    var _ascendArr$i = _slicedToArray(ascendArr[i], 2),
        s1 = _ascendArr$i[0],
        e1 = _ascendArr$i[1];

    var _descendArr$j = _slicedToArray(descendArr[j], 2),
        s2 = _descendArr$j[0],
        e2 = _descendArr$j[1];

    if (s2 > e1) {
      i++;
    } else if (s1 > e2) {
      j++;
    } else {
      for (var m = s2; m <= e1; m++) {
        res.push(m);
      }

      if (e1 >= e2) {
        j++;
      } else {
        i++;
      }
    }
  }

  console.log("descendArr", descendArr);
  return res;
};

function test() {
  var fun = goodDaysToRobBank;
  var params = [// [5, 3, 3, 3, 5, 6, 2], 2
  [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8], 2];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();