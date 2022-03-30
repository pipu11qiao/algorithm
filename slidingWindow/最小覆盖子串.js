/**
 * @param {string} s
 * @param {string} t
 * @return {string}
*/

var minWindow = function (s, t) {
  const mapT = {};
  let count  =0
  for (let i = 0; i < t.length; i++) {
    const curLetter = t[i];
    if (mapT[curLetter] === undefined) {
      mapT[curLetter] = 0
    }
    mapT[curLetter]++
  }
  const mapS = {};
  let i = 0;
  let end = -1;
  let res = '';
  let min = Number.POSITIVE_INFINITY;
  let missLeterr = '';
  for (; i < s.length; i++) {
    const curLetter = s[i];
    if (mapT[curLetter]) {
      if (end === -1) {
        end = i;
      }
      if (!mapS[curLetter]) {
        mapS[curLetter] == 0
      }
      mapS[curLetter]++
      if (Object.keys(mapT).every(key => mapS[key] >= mapT[key])) {
        for (; end < i; end++) {
          const prevLetter = s[end];
          if (mapT[prevLetter]) {
            if (mapS[prevLetter] === mapT[prevLetter]) {
              missLeterr = prevLetter;
              min = i - end + 1
              res = s.slice(end, i + 1);
              end++
              mapS[prevLetter]--
              break
            }
            mapS[prevLetter]--
          }
        }
      }
      break
    }
  }
}
for (; i < s.length; i++) {

  const curLetter = s[i];
}

};

function test() {
  let fun = minWindow;
  let params = [
    [1, 1, 1, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()