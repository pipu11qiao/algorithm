/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  let tmp = ''
  while (left < right) {
    tmp = s[left];
    s[left] = s[right];
    s[right] = tmp
    left++;
    right--;
  }
};

function test() {
  let fun = reverseString;
  let params = [
    // ["h", "e", "l", "l", "o"]
    ["H", "a", "n", "n", "a", "h"]
  ];


  const res = fun.apply(null, params)
  console.log(`params[0]`, params[0]);
}
test()