/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
  let initArr = new Array(length).fill(0);
  updates.forEach(([start, end, inc]) => {
    initArr[start] += inc;
    if (end < length - 1) {
      initArr[end + 1] += -inc;
    }
  });
  let res = [];
  let cur = 0;
  initArr.forEach((change) => {
    cur += change;
    res.push(cur);
  });
  return res;
};

function test() {
  let fun = getModifiedArray;
  let params = [
    //[1, 1, 1, 0]
    5,
    [
      [1, 3, 2],
      [2, 4, 3],
      [0, 2, -2],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
