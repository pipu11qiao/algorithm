/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (node, target) {
  if (!node) {
    return []
  }
  const { left, val, right } = node;
  const isLeaf = !left && !right;
  if (isLeaf) {
    if (target === val) {
      return [[val]]
    }
    return []
  } else {
    const leaveVal = target - val;
    let leftArr = [];
    let rightArr = [];
    if (left) {
      leftArr = pathSum(left, leaveVal)
    }
    if (right) {
      rightArr = pathSum(right, leaveVal)
    }
    return [...leftArr, ...rightArr].map(item => ([val, ...item]))
  }
};

function test() {
  let fun = pathSum;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()