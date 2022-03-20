/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = null;
  let curNode = null;
  while (l1 && l2) {
    let minNode = l1;
    if (l1.val > l2.val) {
      minNode = l2
      l2 = l2.next
    } else {
      l1 = l1.next
    }
    if (!head) {
      head = minNode;
      curNode = minNode;
    } else {
      curNode.next = minNode;
      curNode = minNode;
    }
  }
  while (l1) {
    minNode = l1
    if (!head) {
      head = minNode;
      curNode = minNode;
    } else {
      curNode.next = minNode;
      curNode = minNode;
    }
    l1 = l1.next
  }
  while (l2) {
    minNode = l2
    if (!head) {
      head = minNode;
      curNode = minNode;
    } else {
      curNode.next = minNode;
      curNode = minNode;
    }
    l2 = l2.next
  }
  return head
};
