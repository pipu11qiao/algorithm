"use strict";

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
function join(num, str) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(str);
  }

  console.log("arr", arr);
  return arr.join('');
}

var longestDiverseString = function longestDiverseString(a, b, c) {
  var arr = [{
    label: 'a',
    value: a
  }, {
    label: 'b',
    value: b
  }, {
    label: 'c',
    value: c
  }];
  arr.sort(function (a, b) {
    return a.value - b.value;
  });
  var str = '';
  var most = arr[2];
  var middle = arr[1];
  var least = arr[0];
  var mostCount = most.value;
  var leastCount = least.value;
  var middleCount = middle.value;

  if (mostCount >= middleCount + leastCount) {
    var preCount = Math.min(mostCount - 2 * (middleCount + leastCount), 2);
    var acCount = leastCount;
    var bcCount = middleCount;
    var accCount = Math.min(mostCount - (acCount + bcCount), acCount);
    var bccCount = Math.min(mostCount - (leastCount * 2 + bcCount), bcCount);
    acCount = leastCount - accCount;
    bcCount = Math.min(middleCount, middleCount - bccCount);
    str += join(preCount, most.label);
    str += join(acCount, "".concat(least.label).concat(most.label));
    str += join(accCount, "".concat(least.label).concat(most.label).concat(most.label));
    str += join(bcCount, "".concat(middle.label).concat(most.label));
    str += join(bccCount, "".concat(middle.label).concat(most.label).concat(most.label));
  } else {
    // mostCount < aCount +bBount mostCount > bCount
    var abcCount = leastCount;

    var _bcCount = middleCount - leastCount;

    var _acCount = mostCount - (_bcCount + abcCount);

    abcCount = abcCount - _acCount;
    _bcCount = _bcCount + _acCount;
    str += join(abc, "".concat(least.label).concat(middle.label).concat(most.label));
    str += join(ac, "".concat(least.label).concat(most.label));
    str += join(bc, "".concat(middle.label).concat(most.label));
  }

  return str;
};

function test() {
  // const res = longestDiverseString(7, 1, 0)
  // const res = longestDiverseString(7, 1, 2)
  var res = longestDiverseString(7, 5, 3);
  console.log("res", res);
}

test();