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
var preorder = function (node) {
  const arr = []
  const stack = [node];
  while (stack.length > 0) {
    let curNode = stack.pop();
    if (curNode) {
      arr.push(curNode.val);
      for (let j = curNode.children.length - 1; j >= 0; j--) {
        stack.push(curNode.children[j])
      }
    }
  }
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