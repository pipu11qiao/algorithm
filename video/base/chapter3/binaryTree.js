class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    setLeft(node) {
        this.left = node;
        return node;
    }

    setRight(node) {
        this.right = node;
        return node;
    }

}

function getPerfectBinaryTreeAll(level) {
    const len = Math.pow(2, level) - 1;
    let i = 0;
    const firstNode = new Node(i + 1);
    const arr = [firstNode];
    const nodeArr = [];
    while (arr.length > 0) {
        const node = arr.pop();
        nodeArr.push(node)
        const leftI = 2 * (node.value - 1) + 1;
        if (leftI < len) {
            i = leftI;
            arr.push(node.setRight(new Node(leftI + 2)));
            arr.push(node.setLeft(new Node(leftI + 1)));
        }
    }
    return {
        nodeArr,
        firstNode
    };
}

function getPerfectBinaryTree(level) {
    return getPerfectBinaryTreeAll(level).firstNode;
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
    printInOrder(node.right, level + 1, "v", room);
    let val = indicator + node.value + indicator;
    const len = val.length;
    const lenL = Math.floor((room - len) / 2);
    val = getSpace(lenL) + val + getSpace(lenL);
    console.log(getSpace(level * room) + val);
    printInOrder(node.left, level + 1, "^", room);
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
    head.left = new Node(-222222222);
    head.right = new Node(3);
    head.left.left = new Node(Number.NEGATIVE_INFINITY)
    head.right.left = new Node(55555555);
    head.right.right = new Node(66);
    head.left.left.right = new Node(777);
    printTree(head);

    head = new Node(1);
    head.left = new Node(2);
    head.right = new Node(3);
    head.left.left = new Node(4);
    head.right.left = new Node(5);
    head.right.right = new Node(6);
    head.left.left.right = new Node(7);
    printTree(head);

    head = new Node(1);
    head.left = new Node(1);
    head.right = new Node(1);
    head.left.left = new Node(1);
    head.right.left = new Node(1);
    head.right.right = new Node(1);
    head.left.left.right = new Node(1);
    printTree(head);
}

// test();

module.exports = {
    Node,
    getPerfectBinaryTree,
    getPerfectBinaryTreeAll,
    printTree,
};
