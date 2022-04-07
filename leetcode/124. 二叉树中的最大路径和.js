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
  const { val, left, right } = node;
  let maxC = Number.NEGATIVE_INFINITY;
  let maxChildC = Number.NEGATIVE_INFINITY;
  let leftObj = null;
  let rightObj = null;
  if (left) {
    leftObj = dfs(left);
    maxC = Math.max(leftObj.c, maxC);
    maxChildC = Math.max(leftObj.childC, maxChildC);
  }
  if (right) {
    rightObj = dfs(right);
    maxC = Math.max(rightObj.c, maxC);
    maxChildC = Math.max(rightObj.childC, maxChildC);
  }
  const curChildMax = (leftObj && leftObj.c > 0 ? leftObj.c : 0) + (rightObj && rightObj.c > 0 ? rightObj.c : 0) + val;

  if (curChildMax > maxChildC) {
    maxChildC = curChildMax
  }
  return {
    c: (maxC > 0 ? maxC : 0) + val,
    childC: maxChildC
  }
}
var maxPathSum = function (root) {
  if (!root) {
    return 0
  }
  const info = dfs(root);
  return info.childC
};
