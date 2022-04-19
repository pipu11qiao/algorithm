/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
  let prev = intervals[0];
  let res = [];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1])
    } else {
      res.push(prev)
      prev = cur
    }
  }
  res.push(prev)
  return res
};

function test() {
  let fun = merge;
  let params = [
    [[1, 4], [2, 3]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()