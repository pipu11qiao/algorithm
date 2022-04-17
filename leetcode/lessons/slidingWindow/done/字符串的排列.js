/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var findAnagrams = function (s, p) {
  let pMap = {};
  let countP = 0
  for (let i = 0; i < p.length; i++) {
    const curLetter = p[i]
    if (pMap[curLetter] === undefined) {
      pMap[curLetter] = 0;
    }
    pMap[curLetter]++
    countP++
  }
  let missMap = { ...pMap };
  let count = 0;
  let misCount = countP;
  let end = 0;
  let curMap = {};
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i]
    count++
    if (curMap[curLetter] === undefined) {
      curMap[curLetter] = 0;
    }
    curMap[curLetter]++;
    if (pMap[curLetter]) {
      if (missMap[curLetter] > 0) {
        missMap[curLetter]--
        misCount--
      }
      if (misCount === 0) {
        return true
      }
    }
    if (count < countP) {
      continue
    }
    // 右移一位
    const prevLetter = s[end];
    if (pMap[prevLetter]) {
      if (curMap[prevLetter] <= pMap[prevLetter]) {
        missMap[prevLetter]++
        misCount++
      }
    }
    end++
    curMap[prevLetter]--;
  }
  return false
};
var checkInclusion = function (s1, s2) {
  if (findAnagrams(s2, s1)) {
    return true
  }
  return false

};

function test() {
  let fun = checkInclusion;
  let params = [
    // "ab", "eidbaooo"
    "ab", "eidboaoo"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()