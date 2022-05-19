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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  let levelArr = root ? [root] : [];
  let level = 0;
  while (levelArr.length > 0) {
    res[level] = []
    const tmpArr = [];
    levelArr.forEach(node => {
      const { val, left, right } = node;
      res[level].push(val);
      if (left) {
        tmpArr.push(left);
      }
      if (right) {
        tmpArr.push(right);
      }
    })
    levelArr = tmpArr;
    level++
  }
  res.reverse()
  return res;
};