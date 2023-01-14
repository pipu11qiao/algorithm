/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let res = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, -1);
  nums.forEach((num, i) => {
    sum += num === 0 ? -1 : 1;
    if (map.has(sum)) {
      res = Math.max(res, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  });
  return res;
};

function test() {
  let fun = findMaxLength;
  let params = [
    //[1, 1, 1, 0]
    [0, 1],
    // [0, 0, 1, 0, 0, 0, 1, 1],
    // [
    //   0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0,
    //   0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
    //   0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0,
    //   0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1,
    // ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
