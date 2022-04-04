/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function getBitCount(num) {
  let count = 0;
  while (num) {
    if (num & 1 === 1) {
      count++
    }
    num = num >> 1
  }
  return count
}
function isPrme(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  if (num === 2) {
    return true
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
var countPrimeSetBits = function (left, right) {
  let res = 0;
  let map = {};
  for (let i = left; i <= right; i++) {
    const count = getBitCount(i);
    if (map[count] === undefined) {
      map[count] = -(-isPrme(count));
    }
    res += map[count]
  }
  return res
};

function test() {
  let fun = countPrimeSetBits;
  let params = [
    10, 15
    // 6, 10
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()