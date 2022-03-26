/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function checkBalance(node) {
  const { left, right } = node
  let letLen = 0;
  if (left) {
    letLen = checkBalance(left);
  }
  if (letLen === -1) {
    return -1
  }
  let rightLen = 0;
  if (right) {
    rightLen = checkBalance(right);
  }
  if (rightLen === -1) {
    return -1
  }
  let diff = Math.abs(letLen - rightLen);
  if (diff > 1) {
    return -1
  }
  return 1 + Math.max(letLen, rightLen)
}

var isBalanced = function (node) {
  if (!node) {
    return true
  }
  const res = checkBalance(node);
  if (res === -1) {
    return false
  }
  return true
};