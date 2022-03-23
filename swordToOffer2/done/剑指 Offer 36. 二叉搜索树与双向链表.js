/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function isLeaf(node) {
  return !node.left && !node.right
}
function converse(root) {
  const { left, right, val } = root;
  let head = null;
  let tail = null;
  root.left = null;
  root.rigt = null;
  if (left) {
    if (isLeaf(left)) {
      head = left;
      left.right = root;
      root.left = left
    } else {
      const { head: leftHead, tail: leftTail } = converse(left);
      head = leftHead
      leftTail.right = root;
      root.left = leftTail
    }
    tail = root
  }
  if (!head) {
    head = root;
    tail = root;
  }
  if (right) {
    if (isLeaf(right)) {
      tail = right
      right.left = root;
      root.right = right;
    } else {
      const { head: rightHead, tail: rightTail } = converse(right);
      rightHead.left = tail;
      tail.right = rightHead
      tail = rightTail
    }
  }
  return { head, tail }
};

var treeToDoublyList = function (root) {
  if (!root) {
    return null;
  }
  const { head, tail } = converse(root);
  head.left = tail;
  tail.right = head;
  return head
}