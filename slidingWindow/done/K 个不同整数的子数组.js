/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  let len = nums.length;
  let r = 0;
  let l = 0;
  let allCount = 0;
  let map = {};
  let numArr = [];
  let res = 0;
  for (; r < len; r++) {
    if (allCount === k - 1) {
      break
    }
    const num = nums[r];
    if (map[num] === undefined) {
      allCount++
      numArr.push(num);
    }
    map[num] = r;
  }
  // debugger
  for (; r < len; r++) {
    const num = nums[r];
    if (map[num] === undefined) {
      allCount++
      numArr.push(num);
    }
    map[num] = r;
    if (allCount >= k) {
      numArr.sort((a, b) => map[a] - map[b]);
      if (allCount > k) {
        // 去掉第一个不满足的字符
        const prevNum = numArr.shift();
        const prevIndex = map[prevNum]
        l = prevIndex + 1
        map[prevNum] = undefined;
        allCount = k
      }
      res += r - l + 1
      res -= r - map[numArr[0]]
    }
  }
  return res
};

function test() {
  let fun = subarraysWithKDistinct;
  let params = [
    // [1, 2, 1, 2, 3], 2
    // [1, 2, 1, 3, 4], 3
    [2, 1, 1, 1, 2], 1
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()