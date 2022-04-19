/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let pVal = preorder[0];
  let pIndex = inorder.indexOf(pVal);
  let leftLen = pIndex;
  let rightLen = inorder.length - pIndex - 1;
  const node = new TreeNode(pVal);
  if (leftLen > 0) {
    node.left = buildTree(preorder.slice(1, 1 + leftLen), inorder.slice(0, pIndex))
  }
  if (rightLen > 0) {
    node.right = buildTree(preorder.slice(1 + leftLen), inorder.slice(1 + leftLen))
  }
  return node;
};
