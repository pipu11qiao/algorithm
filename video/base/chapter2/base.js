

// 用数组实现 栈和队列
// 特殊栈

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


function AStack(size) {
    this.data = [];
    this.minData = [];
}
AStack.prototype = {
    constructor: AStack,
    push: function(item) {
        this.data.push(item);
        const min = this.minData.length === 0 ? Number.POSITIVE_INFINITY : this.minData[this.minData.length - 1];
        console.log('min', min);
        this.minData.push(item < min ? item : min);
    },
    pop: function() {
        this.data.pop();
        this.minData.pop();
    },
    getMin: function() {
        const min = this.minData.length === 0 ? null : this.minData[this.minData.length - 1];
        return min;
    }
}

