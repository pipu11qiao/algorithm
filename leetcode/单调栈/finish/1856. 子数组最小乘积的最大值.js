/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
  // 前缀和
  const sum = [0];
  const mod = 1e9 + 7;
  for(let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  // 使用单调栈求解出左侧第个严格小于该数的元素位置，和右侧第一个严格小于该数的元素的位置
  let stack = [];
  const len = nums.length;
  const right = new Array(len).fill(len);
  for(let i = 0; i < len; i++) {
    while(stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      right[stack[stack.length - 1]] = i;
      stack.pop();
    }
    stack.push(i)
  }
  stack = [];
  const left = new Array(len).fill(-1);
  for(let j = len - 1; j >= 0; j--) {
    while(stack.length && nums[stack[stack.length - 1]] > nums[j]) {
      left[stack[stack.length - 1]] = j;
      stack.pop();
    }
    stack.push(j);
  }
  // 根据前缀和和left， right数组进行枚举求解
  let max = BigInt(0);
  for(let k = 0; k < len; k++) {
    const total = BigInt(sum[right[k]] - sum[left[k] + 1]) * BigInt(nums[k]);
    if (max < total) {
      max = total;
    }
  }
  return max % BigInt(1000000007);
};

function test() {
  let fun = maxSumMinProduct;
  let params = [
    //[1, 1, 1, 0]
    [1, 2, 3, 2],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
