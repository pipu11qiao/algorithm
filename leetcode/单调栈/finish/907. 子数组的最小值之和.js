/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let len = arr.length;
  let minArr = new Array(len).fill(-1);
  let stack = [];
  for (let i = len - 1; i >= 0; i--) {
    let cur = arr[i];
    if (stack.length > 0) {
      while (cur < arr[stack[stack.length - 1]]) {
        let nextIndex = stack.pop();
        minArr[nextIndex] = i;
      }
    }
    stack.push(i);
  }
  let map = { "-1": 0 };
  let MOD = Math.pow(10, 9) + 7;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let minIndex = minArr[i];
    let curRes = (i - minIndex) * arr[i] + map[minIndex];
    res = (res + curRes) % MOD;
    map[i] = curRes;
  }
  // console.log(`minArr`, minArr);
  return res;
};

function test() {
  let fun = sumSubarrayMins;
  let params = [
    //[1, 1, 1, 0]
    // [3, 1, 2, 4],
    [11, 81, 94, 43, 3],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
