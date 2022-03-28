/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let prev = head;
  let node = head.next;
  head.next = null
  while (true) {
    let originNext = node.next
    node.next = prev;
    prev = node;
    if (!originNext) {
      return node
    }
    node = originNext;
  }
};
