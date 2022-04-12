/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  let left = -1;
  let right = 10000;
  while (left + 1 !== right) {
    const mid = Math.floor((right + left) / 2);
    let curNum = reader.get(mid);
    if (curNum === target) {
      return mid
    } else if (curNum > target) {
      right = mid
    } else {
      left = mid
    }
  }
  return -1
};