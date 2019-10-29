class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }

    setNext(node) {
        this.next = node;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    constructor(node = null) {
        this.head = node;
    }

    getLastNode() {
        let node = this.head;
        while (node.next) {
            node = node.next
        }
        return node;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.getLastNode();
            node.setNext(newNode)
        }

    }
}

function getRandomNum() {
    return Math.floor(Math.random() * 20 + 2);
}

function getRandomLinkedList() {
    const len = getRandomNum()
    const num = getRandomNum();
    const linkedList = new LinkedList(new Node(num));
    for (let i = 1; i < len; i++) {
        linkedList.push(getRandomNum());
    }
    return linkedList;
}

function printLinkedList(list) {
    const arr = [];
    let node = list.head;
    arr.push(node.getData());
    console.log(node);
    while (node.next) {
        node = node.next
        console.log(node);
        arr.push(node.getData());
    }
    console.log(arr.join(','));
}

// test

const aList = getRandomLinkedList();
printLinkedList(aList);

module.exports = {
    Node,
    LinkedList,
}
