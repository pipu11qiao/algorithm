/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let bCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      bCount++
    }
  }
  if (bCount === 0) {
    return s
  } else {
    let strArr = new Array(s.length + bCount * 2).fill('t')
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        strArr[j] = '%'
        strArr[j + 1] = '2'
        strArr[j + 2] = '0'
        j += 3
      } else {
        strArr[j] = s[i];
        j++
      }
    }
    return strArr.join('')
  }

};

function test() {
  let fun = replaceSpace;
  let params = [
    "We are happy."
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()