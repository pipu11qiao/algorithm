const util = require('./util');
const {Node} = util;


function reverseList(head) {
    let next = null;
    let tmp;
    while (true) {
        tmp = head.next;
        head.next = next;
        next = head;
        if (!tmp) {
            return head;
        }
        head = tmp;
    }
}

// test
let head = new Node(1, new Node(2, new Node(3)))
console.log(head);
head = reverseList(head);
console.log(head);
/**
 * Node {
  value: 1,
  next: Node { value: 2, next: Node { value: 3, next: null } } }
 Node {
  value: 3,
  next: Node { value: 2, next: Node { value: 1, next: null } } }
 */

