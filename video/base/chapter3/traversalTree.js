// 二叉树的前序，中序，后序遍历的递归非递归实现
const {getPerfectBinaryTree, printTree} = require('./binaryTree')
const tree = getPerfectBinaryTree(3);
printTree(tree);

// front middle back 前序 中序 后序

//*** recursive
function printTreeFrontByRecursive(node) {
    if (!node) {
        return
    }
    console.log(node.value);
    printTreeFrontByRecursive(node.leftNode)
    printTreeFrontByRecursive(node.rightNode);
}

function printTreeMiddleByRecursive(node) {
    if (!node) {
        return
    }
    printTreeMiddleByRecursive(node.leftNode)
    console.log(node.value)
    printTreeMiddleByRecursive(node.rightNode);
}

function printTreeBackRecursive(node) {
    if (!node) {
        return
    }
    printTreeBackRecursive(node.rightNode);
    console.log(node.value);
    printTreeBackRecursive(node.leftNode)
}

// test
function test() {
    // printTreeFrontByRecursive(tree);
    // printTreeMiddleByRecursive(tree);
    printTreeBackRecursive(tree);
}

test();
