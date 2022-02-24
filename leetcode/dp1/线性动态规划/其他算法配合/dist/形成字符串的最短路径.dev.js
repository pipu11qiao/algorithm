"use strict";

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
function makeSearchTree(sorceStr) {
  var len = sorceStr.length;
  var allMap = {};
  var sourceArr = sorceStr.split('');
  var searchArr = [];

  for (var i = len - 1; i >= 0; i--) {
    var map = {};
    var curLetter = sourceArr[i];

    for (var j = len - 1; j > i; j--) {
      var letter = sourceArr[j];

      if (map[letter] === undefined) {
        map[letter] = [];
      }

      map[letter].push(searchArr[j]);
    }

    if (allMap[curLetter] === undefined) {
      allMap[curLetter] = [];
    }

    allMap[curLetter].push(map);
    searchArr[i] = map;
  }

  searchArr = null;
  return allMap;
}

var shortestWay = function shortestWay(source, target) {
  var allMap = makeSearchTree(source);
  console.log("allMap", allMap);
  var len = target.length; // 包含一个字母没有

  for (var i = 0; i < len; i++) {
    if (!allMap[target[i]]) {
      return -1;
    }
  } // 所有字母都有


  var shortIndexMap = {}; // '0-1' 最小数量

  var res = 0;

  for (var _i = 0; _i < len; _i++) {
    var _loop = function _loop(j) {
      console.log("i,j", _i, j);
      var curRes = {
        count: 1,
        mapArr: []
      };
      var curLetter = target[j];

      if (j > _i) {
        var prev = j - 1;
        var curMapArr = [];
        console.log('${i}-${prev}', "".concat(_i, "-").concat(prev));
        var prevStateObj = shortIndexMap["".concat(_i, "-").concat(prev)];
        var prevMapArr = prevStateObj.mapArr;
        prevMapArr.forEach(function (prevObj) {
          if (prevObj[curLetter]) {
            curMapArr.push(prevObj[curLetter]);
          }
        });

        if (curMapArr.length === 0) {
          curRes.count += prevStateObj.count + 1;
          curMapArr = allMap[curLetter];
        } else {
          curRes.count += prevStateObj.count;
        }
      } else {
        curRes.mapArr = allMap[curLetter];
      }

      shortIndexMap["".concat(_i, "-").concat(j)] = curRes;
    };

    for (var j = _i; j < len; j++) {
      _loop(j);
    }

    console.log("shortIndexMap", shortIndexMap);
  }
};

function test() {
  var fun = shortestWay;
  var params = ['abcdcb', 'abcbc'];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();