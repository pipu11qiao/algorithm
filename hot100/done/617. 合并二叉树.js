/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null
  }
  let node = root1;
  if (node) {
    if (root2) {
      node.val = node.val + root2.val;
      node.left = mergeTrees(root1.left, root2.left);
      node.right = mergeTrees(root1.right, root2.right);
    }
  } else {
    node = root2
  }
  return node;
};