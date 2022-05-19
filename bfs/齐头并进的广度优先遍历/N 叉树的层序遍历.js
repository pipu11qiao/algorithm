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
var levelOrder = function (root) {
  const res = [];
  let levelArr = root ? [root] : [];
  let level = 0;
  while (levelArr.length > 0) {
    const tmpArr = [];
    res[level] = [];
    levelArr.forEach(node => {
      const { val, children } = node;
      res[level].push(val);
      children.forEach(_node => {
        if (_node) {
          tmpArr.push(_node);
        }
      })
    })
    levelArr = tmpArr;
    level++;
  }
  return res;
};