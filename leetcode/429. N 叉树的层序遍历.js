/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
function orderFun(root, arr, level) {
  if (arr === undefined) {
    arr = [];
  }
  if (level === undefined) {
    level = 0;
  }
  if (!root) {
    return
  }
  const { val, children } = root;
  if (!arr[level]) {
    arr[level] = [];
  }
  arr[level].push(val);
  children.forEach(item => {
    orderFun(item, arr, level + 1);
  })
}
var levelOrder = function (root) {
  const arr = [];
  orderFun(root, arr, 0);
  return arr
};