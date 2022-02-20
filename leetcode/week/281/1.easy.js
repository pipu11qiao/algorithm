/**
 * @param {number} num
 * @return {number}
 */

var countEven = function (num) {
  function isOdd(num) {
    return num % 2 === 0
  }
  let map = {}
  for (let i = 0; i < 10; i++) {
    map[i] = isOdd(i)
  }
  function isOk(num) {
    let str = num + '';
    let evenCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
        evenCount++
      }
    }
    return evenCount % 2 === 0
  }
  let res = 0;
  for (let i = 1; i <= num; i++) {
    isOk(i) && (res++)
  }
  return res
};
function test() {
  let fun = countEven;
  let params = [
    // 4
    30
  ];



  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()