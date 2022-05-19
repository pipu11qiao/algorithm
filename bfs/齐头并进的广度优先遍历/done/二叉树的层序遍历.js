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
var levelOrder = function (root) {
  let nodeArr = root ? [root] : [];
  let resArr = [];
  while (nodeArr.length > 0) {
    let tmpArr = [];
    let curResArr = [];
    for (let i = 0; i < nodeArr.length; i++) {
      curResArr.push(nodeArr[i].val);
      nodeArr[i].left && tmpArr.push(nodeArr[i].left);
      nodeArr[i].right && tmpArr.push(nodeArr[i].right)
    }
    nodeArr = tmpArr
    resArr.push(curResArr)
  }
  return resArr
};