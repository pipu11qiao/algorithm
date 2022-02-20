
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
var mergeNodes = function (node) {
  let curNode = null;
  let prevNode = null;
  let headNode = null;
  while (node) {
    let val = node.val;
    let next = node.next

    if (val === 0) {
      if (curNode) {
        if (!headNode) {
          headNode = curNode
        }
        if (prevNode) {
          prevNode.next = curNode;
        }
        prevNode = curNode
        curNode.next = null;
        curNode = null
      }
    } else {
      if (!curNode) {
        curNode = node;
      } else {
        curNode.val += node.val
      }
    }
    node = node.next;
  }
  return headNode
};
function test() {
  let fun = isOneBitCharacter;
  let params = [
    [1, 1, 1, 0]
  ];



  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()