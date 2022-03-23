/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root, str) {
  if (!root) {
    return '#,'
  }
  str = '';
  const { val, left, right } = root;
  str += val + ','
  str += serialize(left);
  str += serialize(right);
  return str;
};
// 前序 12##34##5##
// 前序 -10##1##
function unPre(data, start) {
  start = start === undefined ? 0 : start;
  let curLetter = data[start];
  if (curLetter === '#') {
    return {
      node: null,
      len: 1
    };
  } else {
    let len = 1;
    const node = new TreeNode(curLetter);
    const { node: leftNode, len: leftLen } = unPre(data, start + len);
    node.left = leftNode;
    len += leftLen
    const { node: rightNode, len: rightLen } = unPre(data, start + len);
    node.right = rightNode;
    len += rightLen
    return {
      node,
      len,
    }
  }
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',');
  const len = arr.length;
  const { node } = unPre(arr.slice(0, len - 1))
  return node
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */