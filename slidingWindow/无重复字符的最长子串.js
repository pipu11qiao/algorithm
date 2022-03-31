/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

};

function test() {
  let fun = lengthOfLongestSubstring;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()