/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */

function check(sorceStr, target) {
  let j = 0;
  for (let i = 0; i < sorceStr.length && j < target.length; i++) {
    if (sorceStr[i] === target[j]) {
      j++
    }
  }
  const res = j >= target.length
  return res
}
var shortestWay = function (source, target) {
  let map = {}
  for (let i = 0; i < source.length; i++) {
    map[source[i]] = 1
  }
  for (let i = 0; i < target.length; i++) {
    if (!map[target[i]]) {
      return -1
    }
  }
  let res = 0;
  let tmpStr = '';
  for (let i = 0; i < target.length; i++) {
    let curLetter = target[i];
    if (i === 0 || !check(source, tmpStr + curLetter)) {
      res += 1;
      tmpStr = curLetter
    } else {
      tmpStr = tmpStr + curLetter
    }
  }
  return res;
};
function test() {
  let fun = shortestWay;
  let params = [
    // 'abcdcb', 'abcbc'
    // "abc", "abcbc"
    // "abc", "acdbc"
    "xyz", "xzyxz"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()