/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let len = nums.length;
  if (len < 2) {
    return false;
  }
  let map = new Map(); // key 余数 value index
  map.set(0, -1);
  let remainder = 0;
  for (let i = 0; i < len; i++) {
    // console.log(`map`, map);
    remainder = (remainder + nums[i]) % k;
    if (map.has(remainder)) {
      let index = map.get(remainder);
      if (i - index >= 2) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }
  return false;
};

function test() {
  let fun = checkSubarraySum;
  let params = [
    //[1, 1, 1, 0]
    // [23,2,4,6,7],
    // 6
    [23, 2, 4, 6, 6],
    7,
    // [1, 0],
    // 2,
    // [0, 0],
    // 1,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
