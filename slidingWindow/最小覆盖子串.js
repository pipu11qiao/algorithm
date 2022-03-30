/**
 * @param {string} s
 * @param {string} t
 * @return {string}
*/

var minWindow = function (s, t) {
  const mapT = {};
  const missMapT = {};
  const mapS = {};
  let missCuont = 0;
  for (let i = 0; i < t.length; i++) {
    const curLetter = t[i];
    if (!mapT[curLetter]) {
      mapT[curLetter] = 0;
      missMapT[curLetter] = 0;
    }
    mapT[curLetter]++
    missMapT[curLetter]++
    missCuont++
  }
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const curLetter = t[i];
    if (mapT[curLetter]) {
      if (!mapS[curLetter]) {
        mapS[curLetter] = 0;
      }
      mapS[curLetter]++
      if (missMapT[curLetter] > 0) {
        missMapT[curLetter]--
        missCuont--
      }
      if (missCuont === 0) { //有完成的了

      }
    }
  }
};

function test() {
  let fun = minWindow;
  let params = [
    "ADOBECODEBANC", "ABC"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()