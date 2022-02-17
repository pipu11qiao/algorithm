/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const len = nums.length;
  if (len == 1) {
    return 0
  }
  if (len <= 2) {
    return nums[0] === nums[1] ? 1 : 0
  }
  // 0,2,4..
  const mapI = {};
  // 1,3.5..
  const mapI1 = {}
  for (let i = 0; i < len; i++) {
    let map = i % 2 === 0 ? mapI : mapI1;
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = 0
    }
    map[num]++
  }
  let numArr = Object.keys(mapI);
  let num = numArr[0];
  let count = mapI[num];
  numArr.forEach((_num, i) => {
    if (i !== 0 && mapI[_num] > count) {
      num = _num;
      count = mapI[_num]
    }
  })

  let num1Arr = Object.keys(mapI1);
  let num1 = num1Arr[0];
  let count1 = mapI1[num1];

  num1Arr.forEach((_num, i) => {
    if (i !== 0 && mapI1[_num] > count1) {
      num1 = _num;
      count1 = mapI1[_num]
    }
  })
  if (num === num1) {
    if (count > count1) {
      mapI1[num] = 0;
      count1 = Math.max.apply(Math, Object.keys(mapI1).map(num => mapI1[num]));
    } else {
      mapI[num] = 0
      count = Math.max.apply(Math, Object.keys(mapI).map(num => mapI[num]));

    }
  }


  return len - count - count1
};

function test() {
  const arr = [3, 1, 3, 2, 4, 3];
  // const arr = [1, 2, 2, 2, 2];
  const res = minimumOperations(arr);
  console.log(`res`, res);

}
test()