/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const strArr = s.trim().split(' ').filter(item => item !== '')
  strArr.reverse()
  return strArr.join(' ')
};

function test() {
  let fun = reverseWords;
  let params = [
    "a good   example"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()