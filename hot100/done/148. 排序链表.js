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
var sortList = function (head) {
  if (!head) {
    return null
  }
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      arr[i].next = null;
    } else {
      arr[i].next = arr[i + 1]
    }
  }
  return arr[0]
};