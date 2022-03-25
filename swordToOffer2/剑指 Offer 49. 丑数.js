/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let resArr = [1];
  const cur = 1
  const indexMap = [
    {
      type: 2,
      index: -1,
    },
    {
      type: 3,
      index: -1,
    },
    {
      type: 5,
      index: -1,
    },
  ]
  const map = { 1: 1 };
  for (let i = 2; i <= n; i++) {
    debugger;
    const nextArr = indexMap.map(item => ({
      ...item,
      val: item.type * resArr[item.index + 1]
    })).sort((a, b) => a.val - b.val)
    const { val, type } = nextArr[0];
    const nextNum = val;
    indexMap[type === 2 ? 0 : type === 3 ? 1 : 2].index++
    resArr.push(nextNum);
  }
  const len = resArr.length;
  return resArr[len - 1]
};

function test() {
  let fun = nthUglyNumber;
  let params = [
    5
    // 10
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()