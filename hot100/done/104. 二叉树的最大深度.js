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
 * @return {number}
 */
function pre(node) {
  if (!node) {
    return 0
  }
  const { left, right } = node;
  return Math.max(pre(left), pre(right)) + 1
}
var maxDepth = function (root) {
  return pre(root)

};