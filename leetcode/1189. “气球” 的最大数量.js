/**
 * @param {string} text balloon
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const len = text.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map[text[i]] === undefined) {
      map[text[i]] = 0
    }
    map[text[i]]++
  }
  // console.log(`map`, map);
  return Math.floor(Math.min(map.b || 0, map.a || 0, map.n || 0, (map.l || 0) / 2, (map.o || 0) / 2))
};


function test() {
  // const res = maxNumberOfBalloons("loonbalxballpoon");
  const res = maxNumberOfBalloons("leetcode");
  console.log(`res`, res);

}

test()