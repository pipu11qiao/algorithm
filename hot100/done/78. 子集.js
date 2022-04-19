/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[], [nums[0]]]
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    let count = res.length;
    for (let j = 0; j < count; j++) {
      res.push([...res[j], curNum])
    }
  }
  return res;
};

function test() {
  let fun = subsets;
  let params = [
    [1, 2, 3]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()