
function maxTurbulenceSize(nums) {
  let l = 0;
  const len = nums.length;
  let prev = 0;
  let res = 0;
  let isStart = true;
  for (let r = 1; r < len; r++) {
    const curCompare = nums[r] - nums[r - 1] > 0 ? 1 : nums[r] - nums[r - 1] < 0 ? -1 : 0;
    if (curCompare === 0) {
      res = Math.max(res, r - l);
      l = r
      isStart = true;
    } else {
      if (isStart) {
        prev = curCompare
        isStart = false;
      } else {
        if (curCompare === prev) {
          res = Math.max(res, r - l);
          l = r - 1;
        } else {
          prev = curCompare
        }
      }
    }

  }
  res = Math.max(res, len - l);
  return res
}

function test() {
  let fun = maxTurbulenceSize;
  let params = [
    // [4, 8, 12, 16]
    [100]
    // [9, 4, 2, 10, 7, 8, 8, 1, 9]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
