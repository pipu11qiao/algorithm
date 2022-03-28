/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) {
    return head;
  }
  if (head.val === val) {
    return head.next
  }
  let prev = head;
  let node = head.next;
  while (node) {
    if (node.val === val) {
      prev.next = node.next
    }
    prev = node
    node = node.next
  }
  return head
};

function test() {
  let fun = deleteNode;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()