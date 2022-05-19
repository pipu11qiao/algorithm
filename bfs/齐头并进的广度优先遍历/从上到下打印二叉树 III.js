/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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