var find132pattern = function(nums) {
    let stack = [], med = -Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < med) return true
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            med = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
};


function test() {
  let fun = find132pattern;
  let params = [
    //[1, 1, 1, 0]
    // [1, 2, 3, 4],
    // [3, 1, 4, 2],
    [-1, 3, 2, 0],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
