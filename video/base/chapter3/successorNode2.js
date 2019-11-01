// 带有parent属性的特殊二叉树，找后继节点和前驱节点
// 二叉树的前序，中序，后序遍历的递归非递归实现
const {Node, getPerfectBinaryTreeAll, printTree} = require('./binaryTree')
const {inOrderRecur} = require('./traversalTree');
const tree = getPerfectBinaryTreeAll(4).firstNode;
printTree(tree);

// 中序遍历中的找到节点的后继节点
function getSuccessorNode(node) {
    if (node.right) {
        // 找到右节点树中序最左边的节点
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        // console.log(node);
        return node;
    } else {
        // 找到不一直是右节点的节点，知道根节点
        let curNode = node;
        while (curNode.parent !== null && curNode.parent.right === curNode) {
            curNode = curNode.parent;
        }
        if (curNode.parent) {
            return curNode.parent
        }
    }

}


// 中序遍历的中找到节点的前驱节点
function getPrecursorNode(node) {
    let parent = node.parent;
    if (node.left) {
        // 找到左侧节点树中中序遍历最右边的节点
        node = node.left;
        while (node.right) {
            node = node.right;
        }
        return node
    } else {
        // 祖先节点不是父节点的左侧节点的节点（知道根节点还没找到那就是自己）,找到就是给节点的父节点
        while (parent && node === parent.left) {
            parent = parent.parent
        }
        if (parent.parent) {
            return parent
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
    inOrderRecur(head);

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
    // const node = head.left.left;
    // console.log('node.value', node.value);
    // const successorNode = getPrecursorNode(node);
    // if(successorNode){
    //     console.log(successorNode.value);
    // }
}

test();
