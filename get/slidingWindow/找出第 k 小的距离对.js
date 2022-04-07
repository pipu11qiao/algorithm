/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  function guess(num) {
    let count = 0;
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
      while (nums[r] - nums[l] > num) {
        l++
      }
      count += r - l
    }
    return count
  }
  nums.sort((a, b) => a - b)
  let maxDiff = nums[nums.length - 1] - nums[0];
  let kL = 0;
  let kR = maxDiff;
  let countL = guess(kL);
  let countR = guess(kR);
  if (countL >= k) {
    return kL;
  }
  while (true) {
    let mid = Math.floor((kR - kL) / 2) + kL;
    let count = guess(mid);
    if (count >= k) {
      kR = mid;
      countR = count;
    } else {
      kL = mid;
      countL = count;
    }
    if (countR >= k && countL < k) {
      if (kL + 1 === kR) {
        return kR
      }
    }
  }
};

function test() {
  let fun = smallestDistancePair;
  let params = [
    // [1, 3, 1], 2
    // [1, 1, 1], 2
    [62, 100, 4], 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()