/**
 * @param {string} s
 * @return {string}
 */
const map = {};
for (let i = 65; i <= 90; i++) {
  map[String.fromCharCode(i)] = 1
}
for (let i = 97; i <= 122; i++) {
  map[String.fromCharCode(i)] = 1
}
// console.log(`map`, map);
var reverseOnlyLetters = function (s) {
  const len = s.length;
  let arr = s.split('');
  let sI = 0;
  let eI = len - 1;
  while (sI < eI) {
    while (!map[arr[sI]] && sI < eI) {
      sI++
    }
    while (!map[arr[eI]] && sI < eI) {
      eI--
    }
    if (sI < eI) {
      const tmp = arr[sI];
      arr[sI] = arr[eI];
      arr[eI] = tmp
      sI++
      eI--
    } else {
      break
    }
  }
  return arr.join('')
};

function test() {
  let fun = reverseOnlyLetters;
  let params = [
    // "ab-cd"
    // "a-bC-dEf-ghIj"
    "Test1ng-Leet=code-Q!"
    // "7_28]"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()