/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let info = {
    tCount: 0,
    fCount: 0,
  };
  let end = 0;
  const len = answerKey.length;
  let max = 0;
  for (let i = 0; i <= len; i++) {
    const cur = answerKey[i];
    if (i === len) {
      max = Math.max(max, i - end);
    } else {
      info[cur === 'F' ? 'fCount' : 'tCount']++
      if (info.fCount > k && info.tCount > k) {
        // 都大于k向右移动直到有一个小于等于k
        max = Math.max(max, i - end);
        while (info.fCount > k && info.tCount > k) {
          const prev = answerKey[end];
          info[prev === 'F' ? 'fCount' : 'tCount']--
          end++
        }
      }
    }
  }
  return max

};

function test() {
  let fun = maxConsecutiveAnswers;
  let params = [
    // "TTFF", 2
    // "TFFT", 1
    "TTFTTFTT", 1
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()