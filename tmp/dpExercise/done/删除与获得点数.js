/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};
  nums.forEach(item => {
    if (map[item] === undefined) {
      map[item] = 0
    }
    map[item] += item
  })
  let numArr = Object.keys(map).map(item => Number(item)).sort((a, b) => a - b);
  let f2 = 0;
  let f1 = 0;
  let f1Num = -1;
  for (let i = 0; i < numArr.length; i++) {
    const curNum = numArr[i];
    const count = map[curNum]
    const prevNum = curNum - 1;
    let cur = prevNum === f1Num ? Math.max(f1, f2 + count) : f1 + count
    f2 = f1;
    f1 = cur;
    f1Num = curNum;
  }
  return f1
};

function test() {
  let fun = deleteAndEarn;
  let params = [
    [2, 2, 3, 3, 6, 6, 6, 6, 3, 4, 4, 5, 5]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()