
// 用数组实现 栈和队列
// 特殊栈
// 栈实现队列 队列实现栈

function Stack(size) {
    this.data = new Array(size);
    this.index = 0;
}
Stack.prototype = {
    constructor: Stack,
    push: function(item) {
        if (this.index < this.data.length) {
            this.data[this.index++] = item;
        }
    },
    pop: function() {
        if (this.index > 0) {
            const item = this.data[this.index]
            this.data[--this.index] = undefined;
            return item;
        }
    }
}
function Queue(size) {
    this.data = new Array(size);
    this.end = 0;
    this.start = 0;
    this.size = 0;
}

Queue.prototype = {
    constructor: Queue,
    queueIn: function(item) {
        if (this.size < this.data.length) {
            this.data[this.end] = item;
            this.end = (this.end + 1) % 3;
            this.size++
        }
    },
    queueOut: function() {
        console.log('out');
        if (this.size > 0) {
            this.size--
            const item = this.data[this.start]
            this.data[this.start] = undefined;
            this.start = (this.start + 1) % 3;
            return item;
        }
    }
}
// const s = new Queue(3);
// console.log('s', s);
// console.log('s.data', s.data);
// s.queueIn(1);
// console.log('s.data', s.data);
// s.queueIn(2);
// console.log('s.data', s.data);
// s.queueIn(3);
// console.log('s.data', s.data);
// s.queueOut();
// console.log('s.data', s.data);
// s.queueOut();
// console.log('s.data', s.data);

// s.queueIn(3);
// console.log('s.data', s.data);
// s.queueOut();
// console.log('s.data', s.data);
// s.queueOut();
// console.log('s.data', s.data);
