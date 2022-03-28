/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let resArr = [1];
  let cur = 1
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
  for (let i = 2; i <= n; i++) {
    const nextArr = indexMap.map(item => {
      const { index, type } = item;
      let curIndex = index + 1;
      let val = type * resArr[curIndex]
      while (val <= cur) {
        curIndex++
        val = type * resArr[curIndex]
      }
      return {
        ...item,
        index: curIndex,
        val,
      }
    }).sort((a, b) => a.val - b.val)
    const { val, type, index } = nextArr[0];
    cur = val;
    indexMap[type === 2 ? 0 : type === 3 ? 1 : 2].index = index
    resArr.push(cur);
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