// 二叉树的序列化和反序列化
const {Node, getPerfectBinaryTreeAll, getPerfectBinaryTree, printTree} = require('./binaryTree')

const {preOrderRecur} = require('./traversalTree');

// 前序序列化
function preOrderSerialize(node) {
    // console.log('preOrderUnRecur');
    const stack = [];
    const serializeArr = [];
    stack.push(node);
    while (stack.length !== 0) {
        const node = stack.pop();
        serializeArr.push(node ? node.value : '#');
        if (node) {
            stack.push(node.right);
            stack.push(node.left)
        }
    }
    return serializeArr.join('_');
}

// 前序反序列化
function preOrderDeserialize(str) {
    const queue = str.split('_');
    const stack = [];
    const head = new Node(queue.shift())
    stack.push(head);
    while (stack.length > 0 && queue.length > 0) {
        const parent = stack[stack.length - 1];
        if (parent.right) {
            stack.pop();
            continue
        }
        // stack 中保存当前处理的父节点,如果处理完拿到的节点，查看父节点状态
        const nextStr = queue.shift();
        const isNull = nextStr === '#';
        if (parent.left === null) {
            // 如果父节点左节点为null，如果该节点为空，左节点置为占位符,继续循环,如果不为空，创造节点为左节点，压入栈，循环
            if (isNull) {
                parent.left = '#';
            } else {
                stack.push(parent.left = new Node(nextStr));
            }
        } else {
            // 否则如果父节点左节点不为null，如果父节点左节点为占位符，该节点置为父节点的有节点，修改左节点为null，
            //      如果该节点为空，弹出父节点,继续循环,如果不为空，创造节点为右节点，压入栈，循环
            if (parent.left === '#') {
                parent.left = null;
            }
            if (isNull) {
                parent.right = null;
                stack.pop();
            } else {
                stack.push(parent.right = new Node(nextStr));
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
    const serializeStr = preOrderSerialize(head);
    // console.log('serializeStr', serializeStr);
    // const tree1 = getPerfectBinaryTree(3);
    // preOrderRecur(tree1);
    // const serializeStr1 = preOrderSerialize(tree1);
    // console.log(serializeStr1);
    // const d_tree1 = preOrderDeserialize(serializeStr1);
    const d_tree1 = preOrderDeserialize(serializeStr);
    console.log(d_tree1);
    printTree(d_tree1);
}

test();
