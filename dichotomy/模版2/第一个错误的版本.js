/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      let res = isBadVersion(mid);
      if (res) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left
  };

};

function test() {
  function isBadVersion(x) {
    return x === 4
  }
  let fun = solution(isBadVersion);
  let params = [
    5
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()