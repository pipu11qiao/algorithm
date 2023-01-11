/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  let stack = [];
  let res = 0;
  // console.log(`properties`, properties);
  for (let i = 0; i < properties.length; i++) {
    let cur = properties[i];
    while (stack.length > 0 && cur[1] > stack[stack.length - 1][1]) {
      stack.pop();
      res++;
    }
    stack.push(cur);
    // console.log(`stack`, stack);
  }
  return res;
};

function test() {
  let fun = numberOfWeakCharacters;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [5, 5],
    //   [6, 3],
    //   [3, 6],
    // ],
    // [[2,2],[3,3]]
    // [
    //   [1, 5],
    //   [10, 4],
    //   [4, 3],
    // ],
    [
      [1, 1],
      [2, 1],
      [2, 2],
      [1, 2],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
