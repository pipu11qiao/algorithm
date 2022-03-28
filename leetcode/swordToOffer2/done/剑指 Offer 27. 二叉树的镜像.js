/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (node) {
  if (!node) {
    return node
  }
  let newNode = new TreeNode(node.val);
  const leftNode = mirrorTree(node.left);
  const rightNode = mirrorTree(node.right);
  newNode.left = rightNode;
  newNode.right = leftNode;
  return newNode
};