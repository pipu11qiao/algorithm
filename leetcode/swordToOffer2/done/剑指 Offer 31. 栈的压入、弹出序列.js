/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  debugger;
  const len = pushed.length;
  if (len === 0) {
    return true
  }
  let popIndex = 0;
  let pushIndex = 0;
  let stack = [];
  for (; pushIndex < len; pushIndex++) {
    let num = pushed[pushIndex];
    if (num === popped[popIndex]) {
      popIndex++
      while (stack.length > 0) {
        let pushPrev = stack.pop();
        let popNext = popped[popIndex];
        if (pushPrev !== popNext) {
          stack.push(pushPrev)
          break
        } else {
          popIndex++
        }
      }
    } else {
      stack.push(pushed[pushIndex])
    }
  }
  return stack.length === 0
};

function test() {
  let fun = validateStackSequences;
  let params = [
    [1, 0], [1, 0]
    // [1, 2, 3, 4, 5], [4, 5, 3, 2, 1]
    // [1, 2, 3, 4, 5], [4, 3, 5, 1, 2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()