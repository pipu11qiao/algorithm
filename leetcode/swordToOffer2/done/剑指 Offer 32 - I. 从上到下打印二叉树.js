
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function pre(node, level, map) {
  if (!node) {
    return
  }
  map = map || {};
  level = level === undefined ? 0 : level;
  const { val, left, right } = node;
  if (!map[level]) {
    map[level] = []
  }
  map[level].push(val)
  pre(node.left, level + 1, map);
  pre(node.right, level + 1, map);
  return map
}
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const nodeLevelMap = pre(root)
  let res = [];
  Object.keys(nodeLevelMap).sort((a, b) => a - b).forEach(index =>
    res = [...res, ...nodeLevelMap[index]]
  )
  return res

};

function test() {
  let fun = levelOrder;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()