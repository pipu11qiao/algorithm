/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function getArr(root) {
  const { val, left, right } = root;
  const leftArr = left ? getArr(left) : [];
  const rightArr = right ? getArr(right) : [];
  return [...leftArr, val, ...rightArr]
}
var kthLargest = function (root, k) {
  const arr = getArr(root);
  return arr[arr.length - k]

};
