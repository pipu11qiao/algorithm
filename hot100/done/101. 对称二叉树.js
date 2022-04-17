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
 * @return {boolean}
 */
function pre(node, level, arr) {
  if (!arr[level]) {
    arr[level] = []
  }
  if (!node) {
    arr[level].push('#')
    return
  }
  const { val, left, right } = node;
  arr[level].push(val);
  pre(left, level + 1, arr)
  pre(right, level + 1, arr)
}
var isSymmetric = function (root) {
  const arr = [];
  pre(root, 0, arr)
  for (let i = 0; i < arr.length; i++) {
    let curArr = arr[i]
    let left = 0;
    let right = curArr.length - 1;
    while (left < right) {
      if (curArr[left] !== curArr[right]) {
        return false
      }
      left++
      right--
    }
  }
  return true
};
