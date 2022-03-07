/**
 * @param {string} n
 * @return {string}
 */
function checkPlalindrome(str) {
  str += '';
  let s = 0;
  let e = str.length - 1;
  while (s < e) {
    if (str[s] !== str[e]) {
      return false
    }
    s++;
    e--;
  }
  return true
}
var nearestPalindromic = function (n) {
  let left = Number(n);
  while (true) {
    left--
    if (checkPlalindrome(left)) {
      break
    }
  }
  let right = Number(n);
  while (true) {
    right++
    if (checkPlalindrome(right)) {
      break
    }
  }
  let res = right
  // console.log(`left,right`, left, right);
  if (Math.abs(n - left) <= Math.abs(n - right)) {
    res = left
  }
  return res + '';
};

function test() {
  let fun = nearestPalindromic;
  let params = [
    // '123',
    "1213"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()