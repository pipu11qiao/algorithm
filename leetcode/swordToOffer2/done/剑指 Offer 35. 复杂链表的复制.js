/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null
  }
  //1 clone
  let node = head;
  while (node) {
    const { val, next } = node;
    let cloneNode = new Node(val);
    node.next = cloneNode;
    cloneNode.next = next;
    node = next
  }
  //2 random
  node = head;
  while (node) {
    const { next, random } = node;
    if (random) {
      next.random = random.next
    }
    const originNext = next.next;
    node = originNext
  }
  //3 分开
  let newHead = head.next
  node = head;
  let prev = node;
  let clonePrev = node.next
  while (node) {
    const { next } = node;
    const originNext = next.next;
    if (node !== head) {
      prev.next = node;
      clonePrev.next = node.next
      prev = node;
      clonePrev = node.next;
    }
    prev.next = null;
    clonePrev.next = null;
    node = originNext
  }
  return newHead
};