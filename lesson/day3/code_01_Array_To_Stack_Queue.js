// 用数组结构实现大小固定的队列和栈
class ArrayStack {
    constructor(size) {
        if (size <= 0) {
            throw new Error('size 必须大于0');
        }
        this.data = new Array(size);
        this.max = size;
        this.size = 0;
    }

    pop() {
        if (this.size === 0) {
            throw new Error('stack is empty');
        }
        return this.data[this.size--];

    }

    push(item) {
        if (this.size >= this.max) {
            throw new Error('stack is full');
        }
        this.data[this.size++] = item;
    }
}

// test

function testStack() {
    const stack = new ArrayStack(6);
    // stack.pop();
    stack.push(1);
    console.log('stack.data', stack.data);
}

// testStack();

class ArrayQueue {
    constructor(size) {
        if (size <= 0) {
            throw new Error('size 必须大于0');
        }
        this.data = new Array(size);
        this.start = 0;
        this.end = 0;
        this.size = 0;
        this.max = size;
    }

    push(item) {
        if (this.size >= this.max) {
            throw new Error('stack is full');
        }
        this.data[this.end] = item;
        this.end++;
        if (this.end === this.max) {
            this.end = 0;
        }
        this.size++
    }

    shift() {
        if (this.size === 0) {
            throw new Error('stack is empty');
        }
        const res = this.data[this.start];
        this.start++;
        if (this.start === this.max) {
            this.start = 0
        }
        this.size--
        return res;
    }
}
// test
function testQueue() {
    const stack = new ArrayQueue(6);
    // stack.shift();
    stack.push(1);
    stack.push(2);
    console.log(stack.shift());
    console.log(stack.shift());
    console.log(stack.shift());
    console.log('stack.data', stack.data);
}
testQueue();
