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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let level1 = -1;
  let level1ParentNode = null;
  let levelArr = root ? [root] : [];
  let level = 0;
  if (root) {
    if (root.val === x || root.val === y) {
      return false
    }
    while (levelArr.length > 0) {
      const tmpArr = [];
      for (let i = 0; i < levelArr.length; i++) {
        const node = levelArr[i];
        const { left, right } = node;
        if (left) {
          tmpArr.push(left);
        }
        if (right) {
          tmpArr.push(right);
        }
        if (
          (left && (left.val === x || left.val === y))
          || (right && (right.val === x || right.val === y))

        ) {
          if (level1 === -1) {
            level1 = level;
            level1ParentNode = node;
          } else {
            return level === level1 && node !== level1ParentNode
          }
        }
      }
      levelArr = tmpArr;
      level++;
    }
  }
  return false
};