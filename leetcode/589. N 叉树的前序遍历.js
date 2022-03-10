/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (node, arr) {
  if (arr === undefined) {
    arr = []
  }
  if (!node) {
    return arr
  }
  arr.push(node.val);
  node.children.forEach(_node => preorder(_node, arr))
  return arr
};

function test() {
  let fun = preorder;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()