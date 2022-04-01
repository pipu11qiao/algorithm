
function check(nums) {
  debugger
  let l = 0;
  const len = nums.length;
  let prev = nums[0];
  const res = 0;
  for (let r = 1; r < len; r++) {
    const num = nums[r];
    if (num === prev) {
      res = Math.max(res, r - l);
      l = r;
    } else {
      prev = num
    }
  }
  res = Math.max(res, len - l);
  return res
}

function test() {
  let fun = check;
  let params = [
    [0, 1, 1, 1, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
