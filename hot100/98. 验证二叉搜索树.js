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
 * @return {boolean}
 */
let limit = Number.POSITIVE_INFINITY
function check(node) {
  const { val, left, right } = node
  let max = val;
  let min = val
  if (left) {
    const range = check(left);
    if (range[0] === limit || val <= range[1]) {
      return [limit, limit]
    }
    min = range[0];
  }
  if (right) {
    const range = check(right);
    if (range[0] === limit || val >= range[0]) {
      return [limit, limit]
    }
    max = range[1]
  }
  return [min, max]
}
var isValidBST = function (root) {
  const res = check(root)
  if (res[0] !== limit) {
    return true
  }
  return false
};