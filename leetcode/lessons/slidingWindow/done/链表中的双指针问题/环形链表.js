/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let node = head
  let fastNode = node;
  while (node) {
    fastNode = fastNode.next;
    if (fastNode) {
      if (fastNode === node) {
        return true
      }
      fastNode = fastNode.next;
    } else {
      return false
    }
    if (!fastNode) {
      return false
    } else {
      if (fastNode === node) {
        return true
      }
    }
    node = node.next
  }
  return false

};