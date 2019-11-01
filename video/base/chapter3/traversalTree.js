// 二叉树的前序，中序，后序遍历的递归非递归实现
const {getPerfectBinaryTree, printTree} = require('./binaryTree')


// front middle back 前序 中序 后序

//*** recursive
function preOrderRecur(node) {
    if (!node) {
        return
    }
    console.log(node.value);
    preOrderRecur(node.left)
    preOrderRecur(node.right);
}

function inOrderRecur(node) {
    if (!node) {
        return
    }
    inOrderRecur(node.left)
    console.log(node.value)
    inOrderRecur(node.right);
}

function posOrderRecur(node) {
    if (!node) {
        return
    }
    posOrderRecur(node.left)
    posOrderRecur(node.right);
    console.log(node.value);
}

//** not recursive
function preOrderUnRecur(node) {
    // console.log('preOrderUnRecur');
    const stack = [];
    stack.push(node);
    while (stack.length !== 0) {
        const node = stack.pop();
        console.log(node.value);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}

function inOrderUnRecur(node) {
    console.log('inOrderUnRecur');
    const stack = [];
    while (stack.length !== 0 || node !== null) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            const parentNode = stack.pop();
            console.log(parentNode.value);
            node = parentNode.right;
        }
    }
}

function posOrderUnRecur1(node) {
    console.log('posOrderUnRecur1');
    const stack = [];
    const popStack = [];
    stack.push(node);
    while (stack.length !== 0) {
        const node = stack.pop();
        popStack.push(node);
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    while (popStack.length !== 0) {
        console.log(popStack.pop().value);
    }
}

// 层级遍历
function levelOrder(node) {
    const queue = [];
    if (!node) {
        return;
    }
    queue.push(node);
    let level = 1;
    while (queue.length > 0) {
        console.log('level', level++);
        let len = queue.length;
        while (len-- > 0) {
            const parentNode = queue.shift();
            console.log(parentNode.value);
            if (parentNode.left) {
                queue.push(parentNode.left);
            }
            if (parentNode.right) {
                queue.push(parentNode.right);
            }
        }
    }

}

// test
function test() {
    const tree = getPerfectBinaryTree(4);
    printTree(tree);
    // console.log('preOrderRecur:');
    // preOrderRecur(tree);
    // console.log('inOrderRecur:');
    // inOrderRecur(tree);
    // posOrderRecur(tree);
    // preOrderUnRecur(tree);
    // inOrderUnRecur(tree);
    // posOrderUnRecur1(tree);
    levelOrder(tree);
}

// test();

module.exports = {
    preOrderRecur,
    inOrderRecur,
    posOrderRecur,
};

