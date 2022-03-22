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
 * @return {string}
 */
var tree2str = function (root, isRoot) {
  if (isRoot === undefined) {
    isRoot = true
  }
  if (!root) {
    return ''
  }
  let str = '';
  if (!isRoot) {
    str += '('
  }
  const { val, left, right } = root
  str += val;
  if (left) {
    str += tree2str(left, false);
  } else {
    if (right) {
      str += '()'
    }
  }
  if (right) {
    str += tree2str(right, false);
  }
  if (!isRoot) {
    str += ')';
  }
  return str
};