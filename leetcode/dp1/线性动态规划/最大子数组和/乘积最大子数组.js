/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const len = nums.length;
  const resArr = [];

  let s = 1;
  let max = Number.NEGATIVE_INFINITY;
  let negIndex = -1;

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num === 0) {
      s = 0;
      negIndex = -1
      max = Math.max(max, 0)
    } else {
      if (s === 0) {
        s = num;
        negIndex = num < 0 ? i : -1
        max = Math.max(max, num)
      } else {
        s = s * num
        if (s > 0) {
          max = Math.max(max, s);
        } else {
          max = Math.max(max, s, num);
          if (negIndex > -1) {
            max = Math.max(max, s / resArr[negIndex].s)
          }
        }
        if (num < 0 && negIndex === -1) {
          negIndex = i
        }
      }
    }
    resArr.push({
      max,
      s,
      negIndex
    })
  }
  // console.log(`resArr`, resArr);
  return max
};

// {
//   s:1, 乘积
//   max: Number.NEGATIVE_INFINITY, 当前最大值
//   negIndex: -1 // 乘积中包含的第一个负数的index
// }

function test() {
  let arr = [2, 3, -2, 0, 4, 2, -1];
  // let arr = [3, -1, 4];
  // let arr = [2, -5, -2, -4, 3];
  // let arr = [2, -5, -2, -4, 3];
  const res = maxProduct(arr);
  console.log(`res`, res);
}

test()