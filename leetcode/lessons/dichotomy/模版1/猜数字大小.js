/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1;
  let h = n;
  while (l <= h) {
    const mid = l + Math.floor((h - l) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid
    } else if (res === 1) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
};