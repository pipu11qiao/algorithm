// 带有parent属性的特殊二叉树，找后继节点和前驱节点
// 二叉树的前序，中序，后序遍历的递归非递归实现
const {Node, getPerfectBinaryTreeAll, printTree} = require('./binaryTree')
const {posOrderRecur} = require('./traversalTree');
const tree = getPerfectBinaryTreeAll(4).firstNode;
// printTree(tree);

// 后序遍历中的找到节点的后继节点
function getSuccessorNode(node) {
    let parent = node.parent;
    if (!parent) {
        return;
    }
    // 如果该节点为父节点的右节点输出父节点 或父节点无右节点
    if (!parent.right || node === parent.right) {
        return parent;
    } else {
        // 如果该节点为父节点的左节点 找到从父节点触发的
        parent = parent.right;
        while (parent.left || parent.right) {
            if (parent.left) {
                parent = parent.left
            } else {
                parent = parent.right
            }
        }
        return parent;
    }

}


// 后序遍历的中找到节点的前驱节点
function getPrecursorNode(node) {
    // 如果有子节点,有右节点返回右节点，否则返回左节点
    if (node.right || node.left) {
        return node.right || node.left
    } else {
        // 没有子节点,找祖先节点中，该节点是父节点的右节点并且父节点含有左节点的节点
        let curNode = node;
        while (curNode.parent && (curNode.parent.left === curNode || curNode.parent.left === null)) {
            curNode = curNode.parent;
        }
        if (curNode.parent) {
            return curNode.parent.left
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

    printTree(head)
    console.log('in order traversal');
    posOrderRecur(head);

    // printTree(tree)
    // inOrderRecur(tree);
    // nodeArr.forEach(node => {
    //     console.log('node.value', node.value);
    //     const successorNode = getSuccessorNode(node);
    //     if (successorNode) {
    //         console.log(successorNode.value);
    //     }
    // })
    nodeArr.forEach(node => {
        console.log('node.value', node.value);
        const precursorNode = getPrecursorNode(node);
        if (precursorNode) {
            console.log(precursorNode.value);
        }
    })
    // const node = head.left.left.right;
    // console.log('node.value', node.value);
    // const successorNode = getPrecursorNode(node);
    // if (successorNode) {
    //     console.log(successorNode.value);
    // }
}

test();
