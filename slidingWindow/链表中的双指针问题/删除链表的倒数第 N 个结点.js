/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fastNode = head;
  let count = 1;
  while (count < n) {
    fastNode = fastNode.next;
    count++
  }
  let lowPrevNode = null;
  let lowNode = head;
  while (true) {
    fastNode = fastNode.next;
    if (!fastNode) {
      break
    }
    lowPrevNode = lowNode;
    lowNode = lowNode.next
  }
  if (lowNode === head) {
    return head.next
  } else {
    lowPrevNode.next = lowNode.next;
    return head
  }
};