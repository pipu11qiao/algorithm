var StockSpanner = function () {
  this.stack = [];
  this.resMap = {};
  this.arr = [];
  this.index = -1;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.index += 1;
  let res = 1;
  if (
    this.stack.length > 0 &&
    price >= this.arr[this.stack[this.stack.length - 1]]
  ) {
    while (price >= this.arr[this.stack[this.stack.length - 1]]) {
      let prevIndex = this.stack.pop();
      res += this.resMap[prevIndex];
    }
  }
  this.arr.push(price);
  this.stack.push(this.index);
  this.resMap[this.index] = res;
  console.log(`res`, res);
  return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

let obj = new StockSpanner();
obj.next(100);
obj.next(80);
obj.next(60);
obj.next(70);
obj.next(60);
obj.next(75);
obj.next(85);
obj.next(105);