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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  let stack = [root];
  let statusStack = [false];
  while (stack.length > 0) {
    const node = stack.pop();
    const status = statusStack.pop();
    if (!node) { continue }
    const { val, left, right } = node
    if (status) {
      res.push(val);
    } else {
      stack.push(right);
      statusStack.push(false);
      stack.push(node);
      statusStack.push(true);
      stack.push(left);
      statusStack.push(false);
    }
  }
  return res

};