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
var postorder = function (node) {
  const arr = []
  const stack = [];
  const statusStack = [];
  if (node) {
    stack.push(node);
    statusStack.push(false);
  } else {
    return arr;
  }
  while (stack.length > 0) {
    const node = stack.pop();
    const status = statusStack.pop();
    if (node) {
      const { val, children } = node
      if (status) {
        arr.push(val);
      } else {
        stack.push(node);
        statusStack.push(true);
        for (let j = children.length - 1; j >= 0; j--) {
          const _node = children[j];
          stack.push(_node);
          statusStack.push(false);
        }
      }
    }
  }
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