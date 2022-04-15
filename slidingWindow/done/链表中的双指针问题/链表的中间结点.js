/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let half = head;
  let node = head;
  let count = 1;
  while (true) {
    node = node.next
    if (node) {
      count++
      if (count % 2 !== 0) {
        half = half.next
      }
    } else {
      break
    }
  }
  if (count % 2 == 0) {
    return half.next
  }
  return half
};