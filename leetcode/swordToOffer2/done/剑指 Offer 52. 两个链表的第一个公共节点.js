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
  if (!headA || !headB) {
    return null;
  }
  let nodeA = headA;
  let nodeB = headB
  let lenA = 1;
  let lenB = 1;
  while (true) {
    const next = nodeA.next;
    if (next) {
      lenA++
      nodeA = next
    } else {
      break
    }
  }
  while (true) {
    const next = nodeB.next;
    if (next) {
      lenB++
      nodeB = next
    } else {
      break
    }
  }
  if (nodeA !== nodeB) {
    return null;
  }
  nodeA = headA;
  nodeB = headB
  let diff = 0;
  if (lenA > lenB) {
    diff = lenA - lenB;
    while (diff > 0) {
      nodeA = nodeA.next
      diff--
    }
  } else if (lenB > lenA) {
    diff = lenB - lenA;
    while (diff > 0) {
      nodeB = nodeB.next
      diff--
    }
  }
  while (true) {
    if (nodeA === nodeB) {
      return nodeA
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
    if (!nodeA) {
      break
    }
  }
};
