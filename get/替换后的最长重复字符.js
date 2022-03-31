/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getSortArr(countMap) {
  let arr = Object.keys(countMap)
  arr.sort((a, b) => countMap[b] - countMap[a]);
  return arr
}
var characterReplacement = function (s, k) {
  let countMap = {};
  let allCount = 0;
  let res = 0;
  let curMaxLetter = '';
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i];
    if (countMap[curLetter] === undefined) {
      countMap[curLetter] = 0;
    }
    if (curLetter === curMaxLetter) {
      countMap[curLetter]++
      allCount++
    } else {
      let maxCount = countMap[curMaxLetter] || 0;
      let curCount = countMap[curLetter] || 0;
      let curMaxCount = maxCount;
      if (curCount + 1 > maxCount) {
        curMaxCount = curCount + 1;
        curMaxLetter = curLetter;
      }
      if (allCount + 1 - curMaxCount <= k) {
        countMap[curLetter]++
        allCount++
      } else { // 多一个不满足
        res = Math.max(res, allCount);
        countMap[curLetter]++
        allCount++
        for (; end < i;) {
          const prevLetter = s[end];
          countMap[prevLetter]--
          allCount--
          const sortArr = getSortArr(countMap);
          end++
          if (allCount - countMap[sortArr[0]] <= k) {
            curMaxLetter = sortArr[0]
            break
          }
        }
      }
    }
  }
  res = Math.max(s.length - end, res);
  return res
};

function test() {
  let fun = characterReplacement;
  let params = [
    // "ABAB", 2
    "AABABBA", 1
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()