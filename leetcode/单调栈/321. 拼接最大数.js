/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let numArr1 = getBiggestNumStrArr(nums1);
  let numArr2 = getBiggestNumStrArr(nums2);
  let max = "0";
  let removeCount = len1 + len2 - k;
  for (let count1 = 0; count1 <= removeCount && count1 <= len1; count1++) {
    let numStr1 = numArr1[count1];
    let numStr2 = numArr2[removeCount - count1];
    if (numStr2 === undefined) {
      continue;
    }
    let num = getCombination(numStr1, numStr2);
    if (num > max) {
      max = num;
    }
  }
  return max.split("");
};
// 获得删除0-len的最大数
function getBiggestNumStrArr(numArr) {
  let res = [numArr.join("")];
  let len = numArr.length;
  let stack = []; // 单调递减的栈
  for (let i = 0; i < len; i++) {
    let cur = numArr[i];
    while (stack.length > 0 && cur > stack[stack.length - 1]) {
      stack.pop();
      res.push(stack.join("") + numArr.slice(i).join(""));
    }
    stack.push(cur);
  }
  while (stack.length > 0) {
    stack.pop();
    res.push(stack.join(""));
  }
  return res;
}
function getCombination(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let l = 0;
  let r = 0;
  let res = "";
  while (l < len1 && r < len2) {
    let num1 = str1.slice(l);
    let num2 = str2.slice(r);
    if (num1 + num2 > num2 + num1) {
      res += str1[l];
      l++;
    } else {
      res += str2[r];
      r++;
    }
  }
  while (l < len1) {
    res += str1[l];
    l++;
  }
  while (r < len2) {
    res += str2[r];
    r++;
  }
  return res;
}

function test() {
  let fun = maxNumber;
  let params = [
    //[1, 1, 1, 0]
    // [3, 4, 6, 5],
    // [9, 1, 2, 5, 8, 3],
    // 5,
    // [6, 7],
    // [6, 0, 4],
    // 5,
    // [3, 9],
    // [8, 9],
    // 3,
    // [3, 4, 6, 5],
    // [9, 9, 2, 5, 8, 3],
    // 2,
    // [2, 5, 6, 4, 4, 0],
    // [7, 3, 8, 0, 6, 5, 7, 6, 2],
    // 15,
    [2, 1, 7, 8, 0, 1, 7, 3, 5, 8, 9, 0, 0, 7, 0, 2, 2, 7, 3, 5, 5],
    [2, 6, 2, 0, 1, 0, 5, 4, 5, 5, 3, 3, 3, 4],
    35,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
