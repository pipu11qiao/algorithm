/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let len = num.length;
  if (len === k) {
    return "0";
  }
  function getNum(numStr) {
    let res = numStr.replace(/^0+/g, "");
    return res === "" ? "0" : res;
  }
  let stack = []; // 单调递增的栈
  let remain = k;
  for (let i = 0; i < len; i++) {
    let cur = num[i];
    while (stack.length > 0 && cur < stack[stack.length - 1]) {
      stack.pop();
      remain--;
      if (remain === 0) {
        return getNum(stack.join("") + num.slice(i));
      }
    }
    stack.push(cur);
  }
  // console.log(`stack`, stack);
  if (remain > 0) {
    return getNum(stack.slice(0, stack.length - remain).join(""));
  }
};

function test() {
  let fun = removeKdigits;
  let params = [
    //[1, 1, 1, 0]
    "1432219",
    3,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
