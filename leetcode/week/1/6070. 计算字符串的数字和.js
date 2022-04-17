/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    const len = Math.ceil(s.length / k);
    let tmp = '';
    for (let i = 0; i < len; i++) {
      let start = k * i;
      let sum = 0
      for (let j = 0; j < k && start + j < s.length; j++) {
        sum += Number(s[start + j])
      }
      tmp += sum
    }
    s = tmp
  }
  return s
};

function test() {
  let fun = digitSum;
  let params = [
    "11111222223", 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()