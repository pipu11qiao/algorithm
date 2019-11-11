// 并查集
/**
 * 1. isSameSec(A -> set1,B -> set2)
 * 2. union(A,B)
 */
class Node {
    constructor(value, topNode) {
        this.top = topNode || this;
        this.value = value;
    }
}

const Union = {
    find(node) {
        const stack = [];
        while (node.top !== node) {
            stack.push(node);
            node = node.top;
        }
        while (stack.length > 0) {
            stack.pop().top = node;
        }
        return node;
    },
    isSameSet(nodeA, nodeB) {
        return this.find(nodeA) === this.find(nodeB);

    },
    mergeSets(A, B) {
        this.find(nodeB).top = this.find(nodeA);
    },
};
const node1 = new Node(1);
const node4 = new Node(4, new Node(3, new Node(2, node1)))
const node6 = new Node(6, new Node(5, node1));
console.log(node4);
console.log(node6);

