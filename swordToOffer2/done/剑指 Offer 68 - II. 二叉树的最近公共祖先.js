/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 function getPathArr(node, nodeValue) {
  if (!node) {
    return null;
  }
  const { left, right, val } = node;
  if (val === nodeValue) {
    return [node];
  }
  const leftRes = getPathArr(left, nodeValue);
  if (leftRes) {
    return [node, ...leftRes];
  }
  const rightRes = getPathArr(right, nodeValue);
  if (rightRes) {
    return [node, ...rightRes];
  }
  return null
}
var lowestCommonAncestor = function (root, p, q) {
  const pPathArr = getPathArr(root, p.val);
  const qPathArr = getPathArr(root, q.val);
  if (pPathArr && qPathArr) {
    let prev = pPathArr[0];
    for (let i = 1; i < pPathArr.length && i < qPathArr.length; i++) {
      if (pPathArr[i] === qPathArr[i]) {
        prev = pPathArr[i]
      }
    }
    return prev
  } else {
    return null
  }

};