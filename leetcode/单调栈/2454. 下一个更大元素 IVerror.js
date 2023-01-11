/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
  let len = nums.length;
  let maxStack = [];
  let minStack = [];
  let maxArr = new Array(len).fill(-1);
  let minArr = new Array(len).fill(-1);
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    while (maxStack.length > 0 && cur > nums[maxStack[maxStack.length - 1]]) {
      let prevIndex = maxStack.pop();
      maxArr[prevIndex] = i;
    }
    while (minStack.length > 0 && cur <= nums[minStack[minStack.length - 1]]) {
      let prevIndex = minStack.pop();
      minArr[prevIndex] = i;
    }
    maxStack.push(i);
    minStack.push(i);
  }
  // console.log(`maxArr`, maxArr);
  // console.log(`minArr`, minArr);
  let res = new Array(len).fill(-1);
  function getResArr(i, target) {
    if (i === -1) {
      return i;
    }
    let cur = nums[i];
    if (cur > target) {
      return i;
    } else {
      return getResArr(maxArr[i], target);
    }
  }
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    let firstBigIndex = maxArr[i];
    if (firstBigIndex > 0) {
      let nextBigIndex = maxArr[firstBigIndex];
      let nextSmallIndex = getResArr(minArr[firstBigIndex], cur);
      let nextIndex;
      if (nextBigIndex > -1 && nextSmallIndex > -1) {
        nextIndex = Math.min(nextBigIndex, nextSmallIndex);
      } else {
        nextIndex = Math.max(nextBigIndex, nextSmallIndex);
      }
      res[i] = nums[nextIndex] || -1;
    }
  }
  return res;
};

function test() {
  let fun = secondGreaterElement;
  let params = [
    //[1, 1, 1, 0]
    // [2, 4, 0, 9, 10],
    // [1, 17, 18, 0, 18, 10, 20, 0],
    [
      283, 673, 443, 652, 904, 812, 303, 800, 840, 623, 634, 749, 115, 991, 865,
      3, 637, 223, 983, 681, 224, 998, 847, 965, 690, 569, 42, 511, 828, 984,
      156, 445, 445, 975, 391, 683, 764, 199, 609, 241, 795, 902, 50, 369, 232,
      310, 218, 677, 547, 813, 837, 213, 959, 974, 562,
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();

let arr1 = [
  443, 812, 904, 812, 983, 991, 840, 991, 865, 749, 991, 865, 865, -1, 998, 223,
  681, 681, 984, 847, 847, -1, 984, 975, 984, 984, 828, 984, 975, -1, 975, 683,
  683, -1, 764, 795, 902, 241, 902, 902, 813, 974, 232, 547, 677, 547, 547, 837,
  837, 959, 974, 974, -1, -1, -1,
];
let arr2 = [
  443, 812, 904, 812, 983, 991, 840, 991, 865, 749, 991, 865, 865, -1, 998, 223,
  681, 681, 984, 847, 847, -1, 984, 975, 984, 984, 828, 984, 975, -1, 445, 683,
  683, -1, 764, 795, 902, 241, 902, 902, 813, 974, 232, 547, 677, 547, 547, 837,
  837, 959, 974, 974, -1, -1, -1,
];
