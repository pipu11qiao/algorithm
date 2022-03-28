/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder, start, end) {
  const len = postorder.length;
  start = start || 0;
  end = end || len - 1;
  if (start === end) {
    return true
  }
  let midNum = postorder[end];
  let preNum = postorder[end - 1];
  let leftEnd = end - 1;
  let lefetStart = start;
  let rightStart = end - 1;
  let rightEnd = end - 1;

  if (preNum > midNum) {
    while (postorder[rightStart] > midNum && rightStart >= start) {
      rightStart--;
    }
    rightStart++;
    leftEnd = rightStart - 1;
    if (rightStart < rightEnd) {
      let rightRes = verifyPostorder(postorder, rightStart, rightEnd);
      if (!rightRes) {
        return false;
      }
    }
  }
  if (lefetStart <= leftEnd) {
    for (let i = lefetStart; i <= leftEnd; i++) {
      if (postorder[i] > midNum) {
        return false;
      }
    }
    if (lefetStart < leftEnd) {
      let leftRes = verifyPostorder(postorder, lefetStart, leftEnd);
      if (!leftRes) {
        return false;
      }
    }
  }
  return true;
};

function test() {
  let fun = verifyPostorder;
  let params = [
    [1, 3, 2, 6, 5]
    // [1, 6, 3, 2, 5]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()