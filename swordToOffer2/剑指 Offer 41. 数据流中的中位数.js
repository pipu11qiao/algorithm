// type 'g'大于的 'l' 小于的
function findIndex(arr, num, start, end) {
  const len = arr.length;
  if (len === 0) {
    return 0
  }
  start = start === undefined ? 0 : start;
  end = end === undefined ? len - 1 : end
  if (arr[end] <= num) {
    return end + 1
  } else if (arr[start] >= num) {
    return start
  } else {
    const trueLen = end - start + 1;
    if (trueLen === 2) {
      return end
    } else {
      let mid = Math.floor((end - start) / 2) + start
      if (arr[mid] === num) {
        return mid + 1
      } else {
        if (arr[mid] > num) {
          return findIndex(arr, num, start, mid - 1);
        } else {
          return findIndex(arr, num, mid + 1, end);
        }
      }
    }
  }
}
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  console.log(`this.arr`, this.arr);
  const index = findIndex(this.arr, num)
  console.log(`this.arr`, this.arr);
  console.log(`index`, index);
  this.arr.splice(index, 0, num)
  console.log(`this.arr`, this.arr);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.arr.length
  console.log(`len`, len);
  let mid = Math.floor((len - 1) / 2)
  console.log(`mid`, mid);
  if (len % 2 !== 0) {
    return this.arr[mid]
  } else {
    return (this.arr[mid] + this.arr[mid + 1]) / 2
  }

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
obj.addNum(10)
obj.addNum(9)
median = obj.findMedian()
console.log(`median`, median);
obj.addNum(6)
median = obj.findMedian()
console.log(`median`, median);
obj.addNum(8)
median = obj.findMedian()
console.log(`median`, median);
obj.addNum(2)
obj.addNum(7)
median = obj.findMedian()
console.log(`median`, median);