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
 * @return {number}
 */
var closestValue = function (root, target) {
  let node = root;
  let right = Number.POSITIVE_INFINITY;
  let left = Number.NEGATIVE_INFINITY;
  while (node && left < right) {
    const { val, left: leftNode, right: rightNode } = node;
    if (val >= target) {
      right = val;
      node = leftNode;
    } else {
      left = val;
      node = rightNode;
    }
  }
  if (right === Number.POSITIVE_INFINITY) {
    return left
  } if (left === Number.NEGATIVE_INFINITY) {
    return right
  } else {
    if (Math.abs(right - target) > Math.abs(left - target)) {
      return left
    }
    return right
  }
};