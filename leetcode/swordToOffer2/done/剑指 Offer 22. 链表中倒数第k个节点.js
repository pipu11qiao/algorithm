/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let end = null;
  let diff = 1;
  let start = head;
  while (start) {
    if (diff >= k) {
      end = end ? end.next : head
    } else {
      diff++
    }
    start = start.next;
  }
  return end
};

function test() {
  let fun = getKthFromEnd;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()