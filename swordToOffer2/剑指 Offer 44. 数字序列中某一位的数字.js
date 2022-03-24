/**
 * @param {number} n
 * @return {number}
 */

var findNthDigit = function (n) {
  let prev = 0;
  let prevCount = 0;
  let max = '9'
  while (true) {
    // debugger;
    const curCount = -(-max) + 1 - prevCount
    const curNumberCount = max.length
    const cur = prev + curCount * curNumberCount;

    if (cur > n) {
      const num = Math.floor((n - prev) / curNumberCount) + Math.pow(10, curNumberCount - 1)
      let index = (n - prev) % curNumberCount
      return curNumberCount === 1 ? num - 1 : `${num}`[index]
    } else {
      max += '9';
      prev = cur;
      prevCount = prevCount + curCount;
    }
  }

};

function test() {
  let fun = findNthDigit;
  let params = [
    12
    // 3
    // 13
    // 19

  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()