"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(letter) {
  var code = letter.charCodeAt();

  if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57) {
    return true;
  }

  return false;
}

var isPalindrome = function isPalindrome(s) {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    if (!isValid(s[left])) {
      left++;
    } else if (!isValid(s[right])) {
      right--;
    } else {
      if (s[left].toLowercase() !== s[right].toLowercase()) {
        return false;
      }

      left++;
      right--;
    }
  }

  return true;
};

function test() {
  var fun = isPalindrome;
  var params = ["A man, a plan, a canal: Panama"];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();