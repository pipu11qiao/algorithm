var secondGreaterElement = function(nums) {
    var n = nums.length, temp = new Array(n), result = new Array(n), stack = []
    temp.fill(-1)
    for (var i = n; --i >= 0;) {
        while (stack.length > 0 && nums[i] >= nums[stack[0]])
            stack.shift()
        if (stack.length > 0)
            temp[i] = stack[0]
        stack.unshift(i)
    }
    result.fill(-1)
    for (var i = n; --i >= 0;)
        if (temp[i] != -1)
            for (var j = temp[i]; ++j < n;)
                if (nums[j] > nums[i]) {
                    result[i] = nums[j]
                    break
                }
    return result
}


function test() {
  let fun = secondGreaterElement;
  let params = [
    //[1, 1, 1, 0]
    // [2, 4, 0, 9, 10],
    // [1, 17, 18, 0, 18, 10, 20, 0],
    [11, 13, 15, 12, 0, 15, 12, 11, 9],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
