/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let prev = ''
  let max = -1;
  let count = 0
  for (let i = 0; i < num.length; i++) {
    let cur = num[i]
    if (cur === prev) {
      count++
      if (count >= 3) {
        max = Math.max(max, -(-cur))
      }
    } else {
      prev = cur;
      count = 1
    }
  }
  if (max > -1) {
    return `${max}${max}${max}`
  }
  return ''
};

function test() {
  let fun = largestGoodInteger;
  let params = [
    // "6777133339"
    "2300019"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()