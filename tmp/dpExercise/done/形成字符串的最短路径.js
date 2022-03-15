/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  const map = {};
  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (!map[c]) {
      map[c] = [];
    }
    map[c].push(i);
  }
  for (let i = 0; i < target.length; i++) {
    if (!map[target[i]]) {
      return -1
    }
  }
  let res = 1;
  let curSourceIndex = -1;
  function findIndex(letter, start) {
    const len = map[letter].length
    for (let i = 0; i < len; i++) {
      const curIndex = map[letter][i];
      if (curIndex > start) {
        return curIndex
      }
    }
    return -1
  }
  for (let i = 0; i < target.length; i++) {
    const curC = target[i];
    let fIndex = findIndex(curC, curSourceIndex);
    // console.log(`curC, fIndex`, curC, fIndex);
    if (fIndex === -1) {
      res += 1;
      curSourceIndex = map[curC][0];
    } else {
      curSourceIndex = fIndex;
    }
  }
  return res
};

function test() {
  let fun = shortestWay;
  let params = [
    // "abc", "abcbc"
    // "abc", "acdbc"
    "xyz", "xzyxz"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()