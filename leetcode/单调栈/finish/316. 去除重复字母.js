/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let indexMap = {};
  let len = s.length;
  for (let i = 0; i < len; i++) {
    indexMap[s[i]] = i;
  }
  let stack = [];
  let visitedMap = {};

  for (let i = 0; i < len; i++) {
    let cur = s[i];
    let prev = "";
    if (!visitedMap[cur]) {
      while (
        stack.length > 0 &&
        (prev = stack[stack.length - 1]).localeCompare(cur) === 1 &&
        indexMap[prev] > i
      ) {
        stack.pop();
        visitedMap[prev] = false;
      }
      stack.push(cur);
      visitedMap[cur] = true;
    }
  }
  // console.log(`stack`, stack);
  return stack.join("");
};

function test() {
  let fun = removeDuplicateLetters;
  let params = [
    //[1, 1, 1, 0]
    // "bcabc",
    "cbacdcbc",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
