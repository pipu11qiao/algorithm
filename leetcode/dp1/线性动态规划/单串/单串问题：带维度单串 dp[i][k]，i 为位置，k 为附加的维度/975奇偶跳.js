/**
 * @param {number[]} arr
 * @return {number}
 */

function getIndex(stack, target, start, end) {
  let len = end - start + 1;
  if (len === 2) {
    return end;
  }
  let half = Math.floor((end - start) / 2) + start;
  let hafObj = stack[half];
  if (hafObj.val >= target) {
    return getIndex(stack, target, start, half);
  } else {
    return getIndex(stack, target, half, end);
  }
}

var oddEvenJumps = function (arr) {
  let len = arr.length;
  let stack = []; // 递增的栈
  let infoArr = [];
  for (let i = len - 1; i >= 0; i--) {
    let cur = arr[i];
    let curObj = {
      val: cur,
      index: i,
    };
    if (stack.length === 0) {
      infoArr[i] = {
        max: -1,
        min: -1,
      };
      stack.push(curObj);
    } else {
      if (cur <= stack[0].val) {
        infoArr[i] = {
          max: stack[0].index,
          min: cur === stack[0].val ? stack[0].index : -1,
        };
        stack.unshift(curObj);
      } else if (cur > stack[stack.length - 1].val) {
        infoArr[i] = {
          max: -1,
          min: stack[stack.length - 1].index,
        };
        stack.push(curObj);
      } else {
        let nextIndex = getIndex(stack, cur, 0, stack.length - 1);
        let nextObj = stack[nextIndex];
        let prevObj = stack[nextIndex - 1];
        let prevIndex;
        if (prevObj.val === stack[0].val) {
          prevIndex = 0;
        } else {
          prevIndex = getIndex(stack, prevObj.val, 0, stack.length - 1);
        }
        infoArr[i] = {
          max: nextObj.index,
          min: nextObj.val === cur ? nextObj.index : stack[prevIndex].index,
        };
        stack.splice(nextIndex, 0, curObj);
      }
    }
  }
  // console.log(`infoArr`, infoArr);
  let res = 1;
  /* dp[i][j]  表示从i出发，j类型跳是否能到达末尾
     初始状态 dp[len-1][1] =true dp[len-1][0]=true
  */
  let dp = [];
  dp[len - 1] = [true, true];
  for (let i = len - 2; i >= 0; i--) {
    let { min, max } = infoArr[i];
    dp[i] = [];
    // 偶数跳
    dp[i][1] = max > -1 ? dp[max][0] : false;
    dp[i][0] = min > -1 ? dp[min][1] : false;
    if (dp[i][1]) {
      res++;
    }
  }
  // console.log(`dp`, dp);
  return res;
};

function test() {
  let fun = oddEvenJumps;
  let params = [
    //[1, 1, 1, 0]
    // [10, 13, 12, 14, 15],
    // [2, 3, 1, 1, 4],
    // [5, 1, 3, 4, 2],
    [1, 2, 3, 2, 1, 4, 4, 5],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
