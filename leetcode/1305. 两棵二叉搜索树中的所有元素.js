/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function mid(node, arr = []) {
  if (!node) {
    return
  }
  const { val, left, right } = node;
  mid(left, arr);
  arr.push(val);
  mid(right, arr)
}
var getAllElements = function (root1, root2) {
  let arr1 = [];
  mid(root1, arr1);
  let arr2 = [];
  mid(root2, arr2);
  let i1 = 0;
  let i2 = 0;
  let resArr = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] <= arr2[i2]) {
      resArr.push(arr1[i1])
      i1++
    } else {
      resArr.push(arr2[i2])
      i2++
    }
  }
  while (i1 < arr1.length) {
    resArr.push(arr1[i1])
    i1++
  }
  while (i2 < arr2.length) {
    resArr.push(arr2[i2])
    i2++
  }
  return resArr
};
