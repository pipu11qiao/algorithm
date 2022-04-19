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
 * @return {number[][]}
 */
function pre(node, arr, level) {
  if (!node) {
    return
  }
  const { val, left, right } = node;
  if (!arr[level]) {
    arr[level] = [val]
  } else {
    arr[level].push(val)
  }
  pre(left, arr, level + 1);
  pre(right, arr, level + 1);
}
var levelOrder = function (root) {
  const arr = []
  pre(root, arr, 0)
  return arr
};