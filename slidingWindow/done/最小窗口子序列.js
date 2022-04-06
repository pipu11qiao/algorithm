/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function (s1, s2) {
  let tmpArr = [];
  let min = Number.POSITIVE_INFINITY;
  const indexArr = new Array(s2.length).fill(-1);
  let l = 0;
  const s2Len = s2.length;
  for (; l < s1.length; l++) {
    const fLetter = s1[l];
    if (fLetter === s2[0]) {
      let hasOk = false;
      let lastIndex = -1;
      for (let m = l, n = 0; m < s1.length; m++) {
        const curLetter = s1[m];
        const s2Letter = s2[n];
        let okIndex = indexArr[n + 1];
        const s2PrevLetter = s2[n - 1];
        if (curLetter === s2Letter) {
          if (okIndex !== undefined && okIndex > m) {
            hasOk = true
            lastIndex = indexArr[s2Len - 1];
            break
          } else {
            indexArr[n] = m
            if (n === s2Len - 1) {
              hasOk = true;
              lastIndex = m
              break
            }
            n++
          }
        } else if (curLetter === s2PrevLetter) {
          indexArr[n - 1] = m
        }
      }
      if (hasOk) {
        const curCount = lastIndex - l + 1;
        min = Math.min(curCount, min);
        tmpArr.push({
          count: curCount,
          start: l
        })
      } else {
        break
      }
    }
  }
  if (min === Number.POSITIVE_INFINITY) {
    return ''
  }
  const okObj = tmpArr.filter(item => item.count === min)[0]
  return s1.slice(okObj.start, okObj.start + okObj.count);
};

function test() {
  let fun = minWindow;
  let params = [
    "abcdebdde", "bde"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()