/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  let stack = []; // 单调递增的栈 区间最大值的排序 前一个区间的最大值要小于后面区间的最小值
  let len = array.length;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < len; i++) {
    let cur = array[i];
    if (stack.length === 0) {
      stack.push(i);
    } else {
      if (cur >= array[stack[stack.length - 1]]) {
        stack.push(i);
      } else {
        let maxIndex = stack.pop();
        min = Math.min(min, maxIndex);
        while (stack.length > 0 && cur < array[stack[stack.length - 1]]) {
          let index = stack.pop();
          min = Math.min(min, index);
        }
        max = Math.max(max, i);
        stack.push(maxIndex);
      }
    }
  }
  if (min === Number.POSITIVE_INFINITY) {
    return [-1, -1];
  } else {
    return [min, max];
  }
};

function test() {
  let fun = subSort;
  let params = [
    //a
    // [1,2,4,7,10,11,7,12,6,7,16,18,19]
    [8, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 19, 18, 20],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
