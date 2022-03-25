/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  const arr = new Array(n).fill(0).map((_, i) => i + 1).sort();
  return arr[k - 1]
};

