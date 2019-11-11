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
const addTwoNumbers = function (l1, l2) {
    let quotient = 0;
    let remainder = 0;
    let head = null;
    let last = null;
    while (l1 !== null || l2 !== null) {
        const value1 = l1 === null ? 0 : l1.val;
        const value2 = l2 === null ? 0 : l2.val;
        if (l1 && l1.next === null && l2 && l2.next !== null) {
            l1.next = l2.next;
            l2.next = null
        }
        remainder = (value1 + value2 + quotient) % 10
        l1.val = remainder;
        if (!head) {
            head = l1;
        }
        quotient = Math.floor((value1 + value2 + quotient) / 10)
        if (l2) {
            last = l2;
            l2 = l2.next;
        }
        if (l1) {
            last = l1;
            l1 = l1.next;
        }
    }
    if (quotient > 0) {
        last.next = {val: quotient, next: null};
    }
    return head
};


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
const addTwoNumbers = function (l1, l2) {
    let numStr1 = '';
    let numStr2 = '';
    while (l1 !== null) {
        numStr1 += l1.val;
        l1 = l1.next;
    }
    while (l2 !== null) {
        numStr2 += l2.val;
        l2 = l2.next;
    }
    console.log(Number(numStr1.split('').reverse().join('')));
    console.log(Number(numStr2.split('').reverse().join('')));
    const numStr = -(-numStr1.split('').reverse().join('')) - (-numStr2.split('').reverse().join('')) + '';
    console.log('numStr', numStr);
    const head = numStr.split('').reduce((cur, next) => {
        const node = {
            val: next,
            next: cur
        };
        return node;
    }, null);
    console.log('head', head);
    return head
};
