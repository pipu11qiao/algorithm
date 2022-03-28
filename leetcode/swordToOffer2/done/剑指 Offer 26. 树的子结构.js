/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B) {
    return false;
  }
  if (!A) {
    return false;
  }
  let firstB = B.val;
  function check(nodeA, nodeB) {
    if (!nodeB) {
      return true
    } else if (nodeB && nodeA) {
      if (nodeB.val === nodeA.val) {
        const lefRes = check(nodeA.left, nodeB.left);
        if (!lefRes) {
          return false;
        }
        return check(nodeA.right, nodeB.right);
      }
    }
    return false;
  }
  function pre(A) {
    if (!A) {
      return false;
    }
    if (A.val === firstB) {
      if (check(A, B)) {
        return true
      }
    }
    const leftRes = pre(A.left);
    if (leftRes) {
      return true
    }
    return pre(A.right);
  }
  return pre(A)
};
