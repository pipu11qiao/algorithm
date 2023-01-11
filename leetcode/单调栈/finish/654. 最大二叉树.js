/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  /**
   *  如果cur > stack.last, stack.last-1 .right = stack.last,知道不大于 node[cur].left = stack[last-1]
   *  否则 stack.push(node[cur])
   *  在最后添加一个够大的数，10000 返回该节点的left节点
   */
  nums.push(100000);
  let stack = []; // 单调递减的node
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let curNode = new TreeNode(cur);
    if (stack.length === 0) {
      stack.push(curNode);
    } else {
      let right = null;
      let prevNode = null;
      while (stack.length > 0 && cur > stack[stack.length - 1].val) {
        prevNode = stack.pop();
        prevNode.right = right;
        right = prevNode;
      }
      curNode.left = prevNode;
      stack.push(curNode);
    }
  }
  // console.log(`stack`, stack);
  return stack[0].left;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function test() {
  let fun = constructMaximumBinaryTree;
  let params = [
    //[1, 1, 1, 0]
    [2, 3, 1, 6, 0, 5],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
