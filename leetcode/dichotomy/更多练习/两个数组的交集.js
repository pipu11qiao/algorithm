/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = {};
  nums1.forEach(item => {
    map[item] = 1
  });
  const res = [];
  const okMap = {};
  nums2.forEach(item => {
    if (!okMap[item] && map[item]) {
      res.push(item);
      okMap[item] = 1
    }
  })
  return res
};

function test() {
  let fun = intersection;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()