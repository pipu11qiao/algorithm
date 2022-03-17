/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = [0];
  if (n === 0) {
    return res
  }
  res.push(1);
  if (n === 1) {
    return res
  }
  let modeNum = 2;
  for (let i = 2; i <= n; i++) {
    let curMode = i % modeNum;
    res.push(1 + res[curMode])
    if ((i + 1) % modeNum === 0) {
      modeNum *= 2
    }

  }
  return res
};

function test() {
  let fun = countBits;
  let params = [
    // 5
    18
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()