// 二叉树的序列化和反序列化
const {Node, getPerfectBinaryTreeAll, getPerfectBinaryTree, printTree} = require('./binaryTree')
const {preOrderRecur} = require('./traversalTree');

function getTreeInfo(node) {
    if (node === null) {
        return {
            isBalance: true,
            level: 0,
        };
    }
    // 输出 是否是平衡树 当前树的高度
    const falseObj = {
        isBalance: false,
        level: 0,
    }
    const leftInfo = getTreeInfo(node.left);
    if (!leftInfo.isBalance) {
        return falseObj
    }
    const rightInfo = getTreeInfo(node.right);
    if (!rightInfo.isBalance) {
        return falseObj;
    }
    if (Math.abs(leftInfo.level - rightInfo.level) > 1) {
        return falseObj;
    } else {
        return {
            isBalance: true,
            leve: Math.max(leftInfo.level, rightInfo.level) + 1
        }
    }
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

// test();
