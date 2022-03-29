/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const len = nums.length;
  let sum = 0;
  let i = 0;
  let res = Number.POSITIVE_INFINITY;
  for (; i < len;) {
    sum += nums[i]
    if (sum === x) {
      res = i + 1
      break
    } else if (sum > x) {
      break
    }
    i++
  }
  let j = len - 1;
  while (i >= 0) {
    sum -= nums[i];
    if (sum === x) {
      res = Math.min(res, len - 1 - j + i)
    }
    while (sum < x) {
      sum += nums[j]
      j--
      if (sum === x) {
        res = Math.min(res, len - 1 - j + i)
      }
      if (sum >= x) {
        break
      }
    }
    i--
  }

  if (res === Number.POSITIVE_INFINITY) {
    return -1
  }
  return res
}


function test() {
  let fun = minOperations;
  let params = [
    [1, 1, 4, 2, 3], 5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()