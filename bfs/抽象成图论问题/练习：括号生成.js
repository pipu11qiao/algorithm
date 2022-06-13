/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

};

function test() {
  let fun = generateParenthesis;
  let params = [
    [1, 1, 1, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()