/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let countA = 0;
  let countB = 0;
  let prevLetter = colors[0];
  let count = 1;
  for (let i = 1; i <= colors.length; i++) {
    const curLetter = colors[i];
    if (curLetter === prevLetter) {
      count++
    } else {
      if (count >= 3) {
        if (prevLetter === 'A') {
          countA += count - 2;
        } else {
          countB += count - 2;
        }
      }
      prevLetter = curLetter;
      count = 1
    }
  }
  // console.log(`countA,countB`, countA, countB);
  return countA > countB
};

function test() {
  let fun = winnerOfGame;
  let params = [
    "AA"
    // "ABBBBBBBAAA"
    // "AAABABB"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()