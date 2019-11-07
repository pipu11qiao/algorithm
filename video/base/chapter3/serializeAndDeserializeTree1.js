// 层序遍历序列化
// 二叉树的序列化和反序列化
const {Node, getPerfectBinaryTreeAll, getPerfectBinaryTree, printTree} = require('./binaryTree')

const {levelOrder} = require('./traversalTree');

// 前序序列化
function levelOrderSerialize(node) {
    const queue = [];
    const stack = [];
    if (!node) {
        return;
    }
    queue.push(node);
    // let level = 1;
    while (queue.length > 0) {
        // console.log('level', level++);
        let len = queue.length;
        while (len-- > 0) {
            const parentNode = queue.shift();
            stack.push(parentNode ? parentNode.value : '#');
            if (parentNode) {
                queue.push(parentNode.left);
                queue.push(parentNode.right);
            }
        }
    }
    return stack.join('_');
}

// 前序反序列化
function levelOrderDeserialize(str) {
    const queue = str.split('_');
    const nodeQueue = []
    const head = new Node(queue.shift())
    nodeQueue.push(head)
    while (nodeQueue.length > 0) {
        let len = nodeQueue.length;
        while (len-- > 0) {
            const parentNode = nodeQueue.shift();
            const leftStr = queue.shift();
            const rightStr = queue.shift();
            if (leftStr !== '#') {
                nodeQueue.push(parentNode.left = new Node(leftStr));
            }
            if (rightStr !== '#') {
                nodeQueue.push(parentNode.right = new Node(rightStr));
            }

        }
    }
    return head;
}

// test
function test() {
    const head = new Node(6);
    head.parent = null;
    head.left = new Node(3);
    head.left.parent = head;
    head.left.left = new Node(1);
    head.left.left.parent = head.left;
    head.left.left.right = new Node(2);
    head.left.left.right.parent = head.left.left;
    head.left.right = new Node(4);
    head.left.right.parent = head.left;
    head.left.right.right = new Node(5);
    head.left.right.right.parent = head.left.right;
    head.right = new Node(9);
    head.right.parent = head;
    head.right.left = new Node(8);
    head.right.left.parent = head.right;
    head.right.left.left = new Node(7);
    head.right.left.left.parent = head.right.left;
    head.right.right = new Node(10);
    head.right.right.parent = head.right;
    const nodeArr = [head, head.left, head.left.left, head.left.left.right, head.left.right, head.left.right.right, head.right, head.right.left, head.right.left.left, head.right.right];

    printTree(head);
    // console.log('pre order traversal');
    // levelOrder(head);
    const serializeStr = levelOrderSerialize(head);
    // console.log(serializeStr);
    console.log('serializeStr', serializeStr);
    const tree = levelOrderDeserialize(serializeStr);
    printTree(tree);
    // const tree1 = getPerfectBinaryTree(4);
    // printTree(tree1);
    // const serializeStr1 = levelOrderSerialize(tree1);
    // console.log(serializeStr1);
    // const d_tree1 = levelOrderDeserialize(serializeStr1);
    // // console.log(d_tree1);
    // printTree(d_tree1);
}

test();
