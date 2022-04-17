/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str1 = '';
  let node = head;
  let count = 0;
  while (node) {
    str1 += node.val;
    count++
    node = node.next
  }
  let i = 0;
  node = head
  while (i < count / 2) {
    if (node.val + '' !== str1[count - 1 - i]) {
      return false
    }
    i++
    node = node.next
  }
  return true
};