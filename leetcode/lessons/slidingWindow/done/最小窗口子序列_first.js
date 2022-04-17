/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function (s1, s2) {
  const s2Map = {};
  for (let i = 0; i < s2.length; i++) {
    s2Map[s2[i]] = (s2Map[s2[i]] || 0) + 1
  }
  let curMap = {};
  let tmpArr = [];
  let min = Number.POSITIVE_INFINITY;
  let l = 0;
  for (let m = 0, n = 0; m < s1.length; m++) {
    const curLetter = s1[m];
    if (s2Map[curLetter]) {
      const s2Letter = s2[n];
      if (curLetter === s2Letter) {
        n++
      }
      curMap[curLetter] = (curMap[curLetter] || 0) + 1;
      if (n >= s2.length) { // 记录当前的长度和开始位置
        //移动l直到不能移动

        //移动l直到不能移动
        n = n - 1
        for (let i = m; i >= l; i--) {
          const preLetter = s1[i];
          if (preLetter === s2[n]) {
            if (n === 0) {
              l = i
              const curCount = m - l + 1;
              min = Math.min(curCount, min);
              tmpArr.push({
                count: curCount,
                start: l
              })
              break
            }
            n--
          }
        }
        n = 0;
        curMap = {};
        l = m + 1
      }
    }
  }
  if (min === Number.POSITIVE_INFINITY) {
    return ''
  }
  console.log(`tmpArr`, tmpArr);
  const okObj = tmpArr.filter(item => item.count === min)[0]
  return s1.slice(okObj.start, okObj.start + okObj.count);
};

function test() {
  let fun = minWindow;
  let params = [
    // "cnhczmccqouqadqtmjjzl", "cm"
    // "abcdebdde", "bde"
    // "fgrqsqsnodwmxzkzxwqegkndaa", "kzed"
    "ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl",
    "ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl",
    "ntimcimzah"
  ];

  "nevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaph"

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()