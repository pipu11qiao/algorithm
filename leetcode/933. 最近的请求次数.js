var RecentCounter = function () {
  this.reqArr = [];
  this.prev = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.reqArr.push(t);
  let index = this.findIndex(t - 3000);
  this.prev =index;
  return this.reqArr.length - index
};
// 找到第一个大于等于t的数值的index
RecentCounter.prototype.findIndex = function (t) {
  let left = this.prev;
  let right = this.reqArr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (this.reqArr[mid] < t) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */