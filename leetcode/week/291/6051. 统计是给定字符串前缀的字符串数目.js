/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;
  words.forEach(item => {
    let reg = new RegExp('^' + item)
    if (reg.test(s)) {
      count++
    }
  })
  return count
};

function test() {
  let fun = countPrefixes;
  let params = [
    ["a", "b", "c", "ab", "bc", "abc"], "abc"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()