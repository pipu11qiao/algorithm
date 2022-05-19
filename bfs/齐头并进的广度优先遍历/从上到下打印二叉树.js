/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  const res = [];
  let levelArr = root ? [root] : [];
  while (levelArr.length > 0) {
    const tmpArr = [];
    levelArr.forEach(node => {
      const { left, right, val } = node;
      res.push(val);
      if (left) {
        tmpArr.push(left);
      }
      if (right) {
        tmpArr.push(right);
      }
    })
    levelArr = tmpArr;
  }
  return res
};