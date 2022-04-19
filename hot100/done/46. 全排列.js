/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  if (nums.length === 1) {
    return [nums]
  }
  for (let i = 0; i < nums.length; i++) {
    const arr = [...nums]
    arr.splice(i, 1)
    const curRes = permute(arr);
    curRes.forEach(item => {
      res.push([...item, nums[i]])
    })
  }
  return res
};

function test() {
  let fun = permute;
  let params = [
    [1, 2, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()