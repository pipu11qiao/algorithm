/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  let remain = k;
  let len = num.length;
  if (k === len) {
    return "0";
  }
  let res = "";
  function getRes(resStr) {
    let curRes = resStr.replace(/^0+/g, "");
    return curRes ? curRes : "0";
  }
  for (let i = 0; i < len; i++) {
    let curNum = num[i];
    if (stack.length > 0) {
      while (curNum < stack[stack.length - 1]) {
        stack.pop();
        remain--;
        if (remain === 0) {
          res = stack.join("") + num.slice(i);
          return getRes(res);
        }
      }
    }
    stack.push(curNum);
  }
  // console.log(`stack`, stack);
  res = stack.join("").slice(0, stack.length - remain);
  return getRes(res);
};

function test() {
  let fun = removeKdigits;
  let params = [
    //[1, 1, 1, 0]
    // "1432219", 3,
    // "10200",  1
    "10",
    1,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
