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
var averageOfSubtree = function (root) {
  let count = 0
  if (!root) {
    return count
  }
  function pre(node) {
    if (!node) {
      return {
        sum: 0,
        count: 0
      }
    }
    const { left, right, val } = node;
    let infoLeft = pre(left);
    let infoRight = pre(right);
    let allSum = (infoLeft.sum + infoRight.sum + val)
    let allCount = (infoLeft.count + infoRight.count + 1)
    let average = Math.floor(allSum / allCount)
    if (average === val) {
      count++
    }
    return {
      sum: allSum,
      count: allCount
    }
  }
  pre(root)
  return count
};