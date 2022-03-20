/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const map = {};
  const mNumArr = new Array(m).fill(0).map((_, i) => {
    return `${i}`.split('').reduce((s, cur) => s - (-cur), 0)
  })
  const nNumArr = new Array(n).fill(0).map((_, i) => {
    return `${i}`.split('').reduce((s, cur) => s - (-cur), 0)
  })
  const stack = [[0, 0]];
  let diffArr = [[0, 1], [1, 0]];
  let res = 1;
  while (stack.length > 0) {
    let item = stack.pop();
    diffArr.forEach(diff => {
      const nextM = item[0] + diff[0];
      const nextN = item[1] + diff[1];
      const key = `${nextM}-${nextN}`
      if (nextM < m && nextN < n && mNumArr[nextM] + nNumArr[nextN] <= k && !map[key]) {
        map[key] = 1;
        stack.push([nextM, nextN])
        res++
      }
    })
  }
  return res
};

function test() {
  let fun = movingCount;
  let params = [
    3, 2, 17
    // 41, 29, 16,
    // 1, 2, 1,
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()