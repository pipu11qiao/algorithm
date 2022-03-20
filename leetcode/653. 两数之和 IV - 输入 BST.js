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
 * @param {number} k
 * @return {boolean}
 */
function pre(node, map) {
  if (!node) {
    return
  }
  const { val, left, right } = node;
  map[val] = 1;
  pre(left, map);
  pre(right, map);
}
var findTarget = function (root, k) {
  const map = {};
  pre(root, map);
  return Object.keys(map).some(item => {
    let n1 = item;
    let n2 = k - n1;
    return `${n2}` !== item && map[n2]
  })
};