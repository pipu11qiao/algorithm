/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let xorArr = [];
  let pre = 0;
  arr.forEach((item) => {
    pre ^= item;
    xorArr.push(pre);
  });
  xorArr[-1] = 0;
  let res = [];
  queries.forEach(([start, end]) => {
    res.push(xorArr[end] ^ xorArr[start - 1]);
  });
  return res;
};

function test() {
  let fun = xorQueries;
  let params = [
    //[1, 1, 1, 0]
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
