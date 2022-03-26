/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (node) {
  if (!node) {
    return 0
  }
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};
