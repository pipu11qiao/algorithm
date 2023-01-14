/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let len = nums.length;
  let map = new Map(); // key 余数 value index
  map.set(0, 1);
  let sum = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    // console.log(`map`, map);
    sum += nums[i];
    remainder = sum % k;
    if (remainder < 0) {
      remainder += k;
    }
    if (map.has(remainder)) {
      let count = map.get(remainder);
      res += count;
      map.set(remainder, count + 1);
    } else {
      map.set(remainder, 1);
    }
  }
  return res;
};

function test() {
  let fun = subarraysDivByK;
  let params = [
    //[1, 1, 1, 0]
    // [4, 5, 0, -2, -3, 1],
    // // [4, 5, 0],
    // 5,
    // [-5],
    // 5,
    [-1, 2, 9],
    2,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
