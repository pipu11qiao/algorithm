/**
 * @param {string} colors
 * @return {boolean}
 */
const aReg = /AAA+/g;
const bReg = /BBB+/g;
var winnerOfGame = function (colors) {
  let countA = (colors.match(aReg) || []).reduce((s, cur) => s + cur.length - 2, 0);
  let countB = (colors.match(bReg) || []).reduce((s, cur) => s + cur.length - 2, 0);
  return countA > countB
};

function test() {
  let fun = winnerOfGame;
  let params = [
    // "AA"
    "ABAAAAAABBBBBBAAA"
    // "AAABABB"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()