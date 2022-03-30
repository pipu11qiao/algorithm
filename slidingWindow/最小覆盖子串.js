/**
 * @param {string} s
 * @param {string} t
 * @return {string}
*/

var minWindow = function (s, t) {
  const mapT = {};
  const missMapT = {};
  const mapS = {};
  let missCount = 0;
  for (let i = 0; i < t.length; i++) {
    const curLetter = t[i];
    if (!mapT[curLetter]) {
      mapT[curLetter] = 0;
      missMapT[curLetter] = 0;
    }
    mapT[curLetter]++
    missMapT[curLetter]++
    missCount++
  }
  let end = 0;
  let min = Number.POSITIVE_INFINITY;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i];
    if (mapT[curLetter]) {
      if (!mapS[curLetter]) {
        mapS[curLetter] = 0;
      }
      mapS[curLetter]++
      if (missMapT[curLetter] > 0) {
        missMapT[curLetter]--
        missCount--
      }
      if (missCount === 0) { //有完成的了 找到当前满足的最短字符，记录
        for (; end < i;) {
          const prevLetter = s[end];
          if (mapT[prevLetter]) {
            if (mapS[prevLetter] > mapT[prevLetter]) {
              mapS[prevLetter]--
              end++
            } else {
              break
            }
          } else {
            end++
          }
        }
        const curLen = i - end + 1
        if (curLen < min) {
          min = curLen;
          str = s.slice(end, i + 1)
        }
        missMapT[s[end]] = 1;
        mapS[s[end]]--
        end++;
        missCount = 1;
      }
    }
  };
  return str
}

function test() {
  let fun = minWindow;
  let params = [
    "ADOBECODEBANC", "ABC"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()