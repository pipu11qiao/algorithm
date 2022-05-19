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
var zigzagLevelOrder = function (root) {
  const res = [];
  let levelArr = root ? [root] : [];
  let level = 0;
  while (levelArr.length > 0) {
    const tmpArr = [];
    res[level] = [];
    const len = levelArr.length
    levelArr.forEach((item, index) => {
      const { left, right } = item;
      if (left) {
        tmpArr.push(left);
      }
      if (right) {
        tmpArr.push(right);
      }
      res[level].push(levelArr[level % 2 === 0 ? index : len - index - 1].val)
    })
    levelArr = tmpArr
    level++
  }
  return res
};