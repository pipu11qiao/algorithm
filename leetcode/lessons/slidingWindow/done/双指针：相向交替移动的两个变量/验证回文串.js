/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(letter) {
  const code = letter.charCodeAt();
  if (
    (code >= 97 && code <= 122) ||
    (code >= 65 && code <= 90) ||
    (code >= 48 && code <= 57)
  ) {
    return true
  }
  return false

}
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isValid(s[left])) {
      left++
    } else if (!isValid(s[right])) {
      right--
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++
      right--
    }
  }
  return true

};

function test() {
  let fun = isPalindrome;
  let params = [
    "A man, a plan, a canal: Panama"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()