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
function dfs(node) {
  if (!node) {
    return {
      c: 0,
      childC: 0,
    }
  }
  const { left, right } = node;
  let maxC = 0;
  let maxChildC = 0;
  const leftObj = dfs(left);
  maxC = Math.max(leftObj.c, maxC);
  maxChildC = Math.max(leftObj.childC, maxChildC);

  const rightObj = dfs(right);
  maxC = Math.max(rightObj.c, maxC);
  maxChildC = Math.max(rightObj.childC, maxChildC);
  if (leftObj.c + rightObj.c + 1 > maxChildC) {
    maxChildC = leftObj.c + rightObj.c + 1
  }
  return {
    c: maxC + 1,
    childC: maxChildC
  }
}
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0
  }
  const obj = dfs(root)
  return obj.childC - 1
};