/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (node, arr) {
  if (!arr) {
    arr = []
  }
  if (!node) {
    return arr
  }
  const { val, children } = node;
  children.forEach(_node => {
    postorder(_node, arr)
  })
  arr.push(val)
  return arr;
};

function test() {
  let fun = postorder;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()