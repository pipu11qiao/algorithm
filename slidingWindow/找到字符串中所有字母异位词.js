/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let pMap = {};
  let countP = 0
  for (let i = 0; i < p.length; i++) {
    const curLetter = p[i]
    if (missMap[curLetter] === undefined) {
      pMap[curLetter] = 0;
    }
    pMap[curLetter]++
    countP++
  }
  let missMap = { ...pMap };
  let count = 0;
  let misCount = countP;
  let end = 0;
  let resArr = [];
  let curMap = {};
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i]
    count++
    if (curMap[curLetter] === undefined) {
      curMap[curLetter] = 0;
    }
    if (count < countP) {
      if (pMap[curLetter]) {
        if (missMap[curLetter] > 0) {
          missMap[curLetter]--
          misCount--
        }
      }
      continue
    }

    curMap[curLetter]++;
    if (pMap[curLetter]) {
      if (missMap[curLetter] > 0) {
        missMap[curLetter]--
        misCount--
      }
      if (misCount === 0) {
        resArr.push(end);
      }
    }
    // 右移一位
  }

};

function test() {
  let fun = findAnagrams;

  let params = [
    "cbaebabacd", "abc"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()