/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {}
let num = 97;
for (let i = 2; i <= 9; i++) {
  map[i] = new Array((i === 7 || i === 9) ? 4 : 3).fill(0).map(item => {
    return String.fromCharCode(num++);
  });
}

var letterCombinations = function (digits) {
  const len = digits.length;
  if (len === 0) {
    return []
  }
  let prevArr = [...map[digits[0]]];
  for (let i = 1; i < digits.length; i++) {
    let tmpArr = [];
    const curLettter = map[digits[i]];
    curLettter.forEach(item => {
      prevArr.forEach(word => {
        tmpArr.push(word + item)
      })
    })
    prevArr = tmpArr
  }
  return prevArr
};

function test() {
  let fun = letterCombinations;
  let params = [
    // '23'
    '7'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()