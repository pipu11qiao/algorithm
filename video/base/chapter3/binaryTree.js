class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.leftNode = left;
        this.rightNode = right;
    }

    setLeft(node) {
        this.leftNode = node;
        return node;
    }

    setRight(node) {
        this.rightNode = node;
        return node;
    }

}

function getPerfectBinaryTree(level) {
    const len = Math.pow(2, level) - 1;
    let i = 0;
    const firstNode = new Node(i + 1);
    const arr = [firstNode];
    while (arr.length > 0) {
        const node = arr.pop();
        const leftI = 2 * (node.value - 1) + 1;
        if (leftI < len) {
            i = leftI;
            arr.push(node.setRight(new Node(leftI + 2)));
            arr.push(node.setLeft(new Node(leftI + 1)));
        }
    }
    return firstNode;
}

function getSpace(num) {
    return new Array(num + 1).join(' ');
}

/**
 *
 * @param node 树节点
 * @param level 当前节点距离更节点的level
 * @param indicator 值两边的标识符
 * @param room 每个值所占的打印空间，包含标识符
 */
function printInOrder(node, level, indicator = 'H', room = 9) {
    // console.log('node', node);
    if (node == null) {
        return;
    }
    printInOrder(node.rightNode, level + 1, "v", room);
    let val = indicator + node.value + indicator;
    const len = val.length;
    const lenL = Math.floor((room - len) / 2);
    val = getSpace(lenL) + val + getSpace(lenL);
    console.log(getSpace(level * room) + val);
    printInOrder(node.leftNode, level + 1, "^", room);
}

function printTree(node) {
    console.log('Binary Tree:')
    printInOrder(node, 0, "H", 17);
    console.log()
}


// test
function test() {
    const tree = getPerfectBinaryTree(4);
    printTree(tree);


    let head = new Node(1);
    head.leftNode = new Node(-222222222);
    head.rightNode = new Node(3);
    head.leftNode.leftNode = new Node(Number.NEGATIVE_INFINITY)
    head.rightNode.leftNode = new Node(55555555);
    head.rightNode.rightNode = new Node(66);
    head.leftNode.leftNode.rightNode = new Node(777);
    printTree(head);

    head = new Node(1);
    head.leftNode = new Node(2);
    head.rightNode = new Node(3);
    head.leftNode.leftNode = new Node(4);
    head.rightNode.leftNode = new Node(5);
    head.rightNode.rightNode = new Node(6);
    head.leftNode.leftNode.rightNode = new Node(7);
    printTree(head);

    head = new Node(1);
    head.leftNode = new Node(1);
    head.rightNode = new Node(1);
    head.leftNode.leftNode = new Node(1);
    head.rightNode.leftNode = new Node(1);
    head.rightNode.rightNode = new Node(1);
    head.leftNode.leftNode.rightNode = new Node(1);
    printTree(head);
}

// test();

module.exports = {
    Node,
    getPerfectBinaryTree,
    printTree,
};
