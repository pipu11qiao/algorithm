/**
 * @param {string} s
 * @return {string[]}
 */
function strSplice(str, index, letter) {
  return str.slice(0, index) + letter + str.slice(index)
}
var permutation = function (s) {
  const len = s.length
  let arr = [s[0]];
  for (let i = 1; i < len; i++) {
    const tmpArr = [];
    const map = {};
    const curLetter = s[i];
    for (let j = 0; j < arr.length; j++) {
      const curWord = arr[j];
      for (let m = 0; m <= curWord.length; m++) {
        const newWord = strSplice(curWord, m, curLetter)
        if (!map[newWord]) {
          map[newWord] = 1
          tmpArr.push(newWord)
        }
      }
    }
    arr = tmpArr
  }
  return arr
};

function test() {
  let fun = permutation;
  let params = [
    'abc'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()