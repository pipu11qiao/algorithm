"use strict";

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function dfs(node, map, pNode) {
  debugger;
  var children = map[node];
  var len = children.length;
  var isRoot = pNode === undefined;

  if (len === 1 && !isRoot) {
    return {
      c: 1,
      str: "".concat(node)
    };
  }

  var maxObj = null;
  var max = 0;
  var nodeArr = null;

  if (isRoot) {
    nodeArr = [];
  }

  for (var i = 0; i < len; i++) {
    var curNode = children;

    if (curNode !== pNode) {
      var curObj = dfs(curNode, map, node);

      if (isRoot) {
        nodeArr.push(curObj);
      }

      var c = curObj.c,
          str = curObj.str;

      if (c > max) {
        max = c;
        maxObj = curObj;
      }
    }
  }

  if (isRoot) {
    nodeArr.sort(function (a, b) {
      return b.c - a.c;
    });
    return {
      c: nodeArr[0].c + (nodeArr[1] ? nodeArr[1].c : 0) + 1,
      str: "".concat(nodeArr[0].str, "-").concat(node).concat(nodeArr[1] ? "-".concat(nodeArr[1].str) : '')
    };
  } else {
    return {
      c: maxObj.c + 1,
      str: "".concat(node, "-").concat(maxObj.str)
    };
  }
}

var findMinHeightTrees = function findMinHeightTrees(n, edges) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  var map = {};

  var _loop = function _loop(i) {
    edges[i].forEach(function (num, index) {
      if (!map[num]) {
        map[num] = [];
      }

      map[num].push(edges[i][(index + 1) % 2]);
    });
  };

  for (var i = 0; i < edges.length; i++) {
    _loop(i);
  }

  debugger; // 任意节点均可

  var _dfs = dfs(0, map),
      c = _dfs.c,
      str = _dfs.str;

  console.log("c,str", c, str);
};

function test() {
  var fun = findMinHeightTrees;
  var params = [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();