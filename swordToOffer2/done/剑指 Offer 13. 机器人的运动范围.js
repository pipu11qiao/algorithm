/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function getCount(m, n, k, map, type) {
  let res = 0;
  const mNumArr = new Array(m).fill(0).map((_, i) => {
    return `${i}`.split('').reduce((s, cur) => s - (-cur), 0)
  })
  const nNumArr = new Array(n).fill(0).map((_, i) => {
    return `${i}`.split('').reduce((s, cur) => s - (-cur), 0)
  })

  let indexArr = []
  let firstArr = type === 1 ? mNumArr : nNumArr
  for (let i = 0; i < firstArr.length && firstArr[i] <= k; i++) {
    indexArr.push(i)
  }
  for (let i = 0; i < m; i++) {
    let mNum = mNumArr[i];
    let tmpArr = [];
    indexArr.forEach(j => {
      let nNum = nNumArr[j];
      const key = type === 1 ? `${i}-${j}` : `${j}-${i}`
      if (mNum + nNum <= k) {
        tmpArr.push(j);
        if (!map[key]) {
          map[key] = 1
          res += 1;
        }
      }
    })
    indexArr = tmpArr
  }
  return res
}
var movingCount = function (m, n, k) {
  const map = {};
  let res = 0;
  res += getCount(m, n, k, map, 1);
  res += getCount(n, m, k, map, 2);
  return res
};

function test() {
  let fun = movingCount;
  let params = [
    41, 29, 16,
    // 1, 2, 1,
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()