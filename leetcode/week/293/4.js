
var CountIntervals = function () {
  this.arr = [];
  this.leftArr = [];

};

function findIndex(arr, num) {
  let len = arr.length;
  if (len === 0 || num <= arr[0]) {
    return 0
  }
  if (arr[len - 1] < num) {
    return len
  }
  let left = -1;
  let right = arr.length;
  while (left + 1 < right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] >= num) {
      right = mid
    } else {
      left = mid
    }
  }
  return left
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function (left, right) {
  // findLeftIndex
  let leftIndex = findIndex(this.leftArr, left);
  const len = this.arr.length;
  let rightIndex = 0
  if (len === 0 || leftIndex === len - 1) {
    this.arr.push([left, right]);
    this.leftArr.push(left)
  } else {
    if (this.arr[len - 1][1] <= right) {
      rightIndex = len - 1;
    } else {
      let i = leftIndex
      for (; i < this.arr.length;) {
        let curLimit = this.arr[i];
        let curRight = curLimit[1];
        if (curRight <= right) {
          i++
        } else {
          break
        }
      }
      rightIndex = i - 1
    }
    let num = rightIndex - leftIndex + 1;
    this.arr.splice(leftIndex, num, [left, right]);
    this.leftArr.splice(leftIndex, num, left)
  }
};

/**
 * @return {number}
 */
CountIntervals.prototype.count = function () {
  return this.arr.reduce((sum, item) => sum + (item[1] - item[0] + 1), 0);
};

/**
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */

function test() {
  var obj = new CountIntervals();
  obj.add(39, 3);
  obj.add(7, 10);
  let res = obj.count()
  console.log(res);
  obj.add(5, 8);
  res = obj.count()
  console.log(res);
}

test()