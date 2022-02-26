/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let numArr = nums.map((n, i) => ({ n, i })).sort((a, b) => a.n - b.n).map(item => item.i);
  let max = -1;
  const len = numArr.length
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (numArr[j] > numArr[i] && nums[numArr[j]] > nums[[numArr[i]]]) {
        max = Math.max(max, nums[numArr[j]] - nums[[numArr[i]]])
        break
      }
    }

  }
  return max;
};

function test() {
  let fun = maximumDifference;
  let params = [
    // [7, 1, 5, 4],
    // [9,4,3,2]
    // [1,5,2,10]
    [999, 997, 980, 976, 948, 940, 938, 928, 924, 917, 907, 907, 881, 878, 864, 862, 859, 857, 848, 840, 824, 824, 824, 805, 802, 798, 788, 777, 775, 766, 755, 748, 735, 732, 727, 705, 700, 697, 693, 679, 676, 644, 634, 624, 599, 596, 588, 583, 562, 558, 553, 539, 537, 536, 509, 491, 485, 483, 454, 449, 438, 425, 403, 368, 345, 327, 287, 285, 270, 263, 255, 248, 235, 234, 224, 221, 201, 189, 187, 183, 179, 168, 155, 153, 150, 144, 107, 102, 102, 87, 80, 57, 55, 49, 48, 45, 26, 26, 23, 15]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()