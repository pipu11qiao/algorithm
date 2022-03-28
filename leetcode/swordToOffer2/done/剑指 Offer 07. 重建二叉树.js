// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  const val = preorder[0];
  let midIndex = inorder.indexOf(val);
  const leftCount = midIndex;
  const rightCount = inorder.length - midIndex - 1;
  const node = new TreeNode(val);
  if (leftCount > 0) {
    node.left = buildTree(preorder.slice(1, 1 + leftCount), inorder.slice(0, leftCount))
  }
  if (rightCount > 0) {
    node.right = buildTree(preorder.slice(leftCount + 1), inorder.slice(leftCount + 1))
  }
  return node;
};

function test() {
  let fun = buildTree;
  // 前序和中序
  let params = [
    preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()