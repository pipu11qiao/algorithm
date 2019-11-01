// 带有parent属性的特殊二叉树，找后继节点和前驱节点
// 二叉树的前序，中序，后序遍历的递归非递归实现
const {Node, getPerfectBinaryTreeAll, printTree} = require('./binaryTree')
const {preOrderRecur} = require('./traversalTree');

// 先序遍历中找到节点的后继节点
function getSuccessorNode(node) {
    if (node.left) { // 有左侧节点直接返回左侧节点
        return node.left;
    } else if (node.right) { // 没有左侧节点有右侧节点直接返回右侧节点
        return node.right;
    } else {// 既没有左侧节点也没有右侧节点,找到所属祖先中第一个不是左节点的节点（属于左节点的都被输出过)，如果找不到说明该节点已经是最后节点
        let parent = node.parent;
        while (parent !== null && (parent.left !== node || parent.right === null)) {
            node = parent;
            parent = node.parent;
        }
        if (parent) {
            return parent.right;
        }
    }
}


// 先序遍历中找到节点的前驱节点
function getPrecursorNode(node) {
    if (node.parent) { // 不存在是第一个节点
        const parent = node.parent;
        if (parent.left === null || node === parent.left) { // 该节点是父节点的左节点或父节点不存在，遍历父节点
            return parent;
        } else { //该节点是父节点的右侧节点，找到父节点左侧树中的先序遍历最后遍历的节点
            return getFarRightNode(parent.left);
        }
    }
}
function getFarRightNode(node) {
    // 找到先序遍历最后遍历的节点
    while (node.left || node.right) {
        if (node.right) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    // console.log(node);
    return node;
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

    printTree(head)
    console.log('pre order traversal');
    preOrderRecur(head);
    // nodeArr.forEach(node => {
    //     console.log('node.value', node.value);
    //     const successorNode = constructor(node);
    //     console.log(successorNode.value);
    // })
    // const node = head.right.left.left
    // console.log('node.value', node.value);
    // const successorNode = constructor(node);
    // console.log(successorNode.value);
    nodeArr.forEach(node => {
        console.log('node.value', node.value);
        const precursorNode = getPrecursorNode(node);
        if (precursorNode) {
            console.log(precursorNode.value);
        }
    })
}

test();
