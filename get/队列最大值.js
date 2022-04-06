
function MaxQueue(arr) {
  this.que = arr;
  this.maxQue = arr;
}
MaxQueue.prototype.push = function (val) {
  this.que.push(val);
  while (this.maxQue.length > 0 && this.maxQue[this.maxQue.length - 1] < val) {
    this.maxQue.push(val)
  }
}