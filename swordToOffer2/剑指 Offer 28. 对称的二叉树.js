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
function pre(node, level, map) {
  if (!map[level]) {
    map[level] = []
  }
  if (!node) {
    map[level].push(null);
    return
  }
  const { val, left, right } = node;
  map[level].push(val);
  pre(left, level + 1, map);
  pre(right, level + 1, map);


}
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const map = {};
  pre(root, 0, map);
  const maxLeven = Math.max.apply(Math, Object.keys(map));
  if (maxLeven === '1') {
    return true
  }
  for (let i = 1; i <= maxLeven; i++) {
    const str = map[i].join(',');
    map[i].reverse()
    if (map[i].join(',') !== str) {
      return false;
    }
  }
  return true
};