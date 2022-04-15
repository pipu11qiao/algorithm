/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let nodeA = headA;
  while (nodeA) {
    lenA++
    if (nodeA.next) {
      nodeA = nodeA.next;
    } else {
      break
    }
  }
  let nodeB = headB;
  while (nodeB) {
    lenB++
    if (nodeB.next) {
      nodeB = nodeB.next;
    } else {
      break
    }
  }
  if (nodeA !== nodeB) {
    return null
  }
  let short = headA;
  let long = headB;
  if (lenA > lenB) {
    short = headB;
    long = headA;
  }
  let i = 0
  while (i < Math.abs(lenA - lenB)) {
    long = long.next;
    i++
  }
  while (true) {
    if (long === short) {
      return long
    } else {
      long = long.next;
      short = short.next
    }
  }
};