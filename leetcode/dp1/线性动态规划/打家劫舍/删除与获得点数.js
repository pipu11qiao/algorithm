/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (numObjArr) {
  let max = 0;
  let n1 = {
    num: -1,
    sum: 0
  }; //f(i-1)
  let n2 = {
    num: -1,
    sum: 0
  }; //f(i-2)
  let n3 = {
    num: -1,
    sum: 0
  }; //f(i-3)
  const len = numObjArr.length;
  for (let i = 0; i < len; i++) {
    const numObj = numObjArr[i];
    const curNum = numObj.num;
    let left = n3;
    let right = n2;
    if (curNum !== n1.num + 1) {
      left = n2;
      right = n1;
    }
    const curSum = numObj.numSum + Math.max(left.sum, right.sum)
    max = Math.max(max, curSum)
    n3 = n2
    n2 = n1
    n1 = {
      num: curNum,
      sum: curSum
    }
  }
  return max;
};

var deleteAndEarn = function (nums) {
  const map = {};
  nums.forEach(num => {
    if (map[num] === undefined) {
      map[num] = 0
    }
    map[num] += num
  })
  const tmpArr = Object.keys(map).sort((a, b) => a - b).map(num => ({
    num: Number(num),
    numSum: map[num]
  }))
  return rob(tmpArr);
};

function test() {
  const arr = [3, 3, 4, 2, 3, 4, 2];
  const res = deleteAndEarn(arr)
  console.log(`res`, res);
}

test()