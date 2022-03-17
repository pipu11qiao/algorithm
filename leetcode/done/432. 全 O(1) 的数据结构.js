function ListNode(val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}
var AllOne = function () {
  this.map = {};
  this.head = null;
  this.end = null;
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (!this.map[key]) {
    const node = new ListNode(key);
    if (this.head) {
      node.next = this.head
      this.head.prev = node;
    }
    this.head = node;
    if (!this.end) {
      this.end = node
    }
    this.map[key] = {
      count: 1,
      node
    }
    // 添加新的
  } else {
    const obj = this.map[key];
    let node = obj.node;
    // 添加旧的
    const newCount = this.map[key].count + 1
    this.map[key].count = newCount
    let curNode = node;
    //找到下一个大于它的node
    if (this.end === curNode) {
      return
    }
    let nextNode = null;
    while (true) {
      if (!node.next) {
        break
      }
      if (this.map[node.next.val].count > newCount) {
        nextNode = node.next;
        break
      }
      node = node.next;
    }
    if (nextNode && nextNode === curNode.next) {
      return
    }
    // 没找到说明已经是最大的了，移到最后
    if (curNode.next) {
      curNode.next.prev = curNode.prev
    }
    if (curNode.prev) {
      curNode.prev.next = curNode.next
    }
    if (this.head === curNode) {
      this.head = curNode.next
    }
    if (!nextNode) {
      this.end.next = curNode;
      curNode.prev = this.end;
      curNode.next = null
      this.end = curNode
    } else {
      nextNode.prev.next = curNode;
      curNode.prev = nextNode.prev;
      curNode.next = nextNode;
      nextNode.prev = curNode
    }
  }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (!this.map[key]) {
    return
  }

  const obj = this.map[key];
  const newCount = obj.count - 1
  obj.count = newCount
  let node = obj.node;
  // 添加旧的
  let curNode = node;
  if (obj.count === 0) {
    // 删除
    if (curNode.next) {
      curNode.next.prev = curNode.prev
    }
    if (curNode.prev) {
      curNode.prev.next = curNode.next
    }
    if (this.end === curNode) {
      if (curNode.prev) {
        this.end = curNode.prev
      } else {
        this.end = null
      }
    }
    if (this.head === curNode) {
      if (curNode.next) {
        this.head = curNode.next
      } else {
        this.head = null
      }
    }
    delete this.map[key]
  } else {
    // 移动
    //找到上一个小于它的node
    let prevNode = null;
    if (this.head === curNode) {
      return
    }
    while (true) {
      if (!node.prev) {
        break
      }
      if (this.map[node.prev.val].count < newCount) {
        prevNode = node.prev;
        break
      }
      node = node.prev;
    }
    if (prevNode && prevNode === curNode.prev) {
      return
    }
    // 没找到说明已经是最大的了，移到最后
    if (curNode.next) {
      curNode.next.prev = curNode.prev
    }
    if (curNode.prev) {
      curNode.prev.next = curNode.next
    }
    if (this.end === curNode) {
      this.end = curNode.prev

    }
    if (!prevNode) {
      this.head.prev = curNode;
      curNode.prev = null;
      curNode.next = this.head;
      this.head = curNode
    } else {
      prevNode.next.prev = curNode;
      curNode.next = prevNode.next
      prevNode.next = curNode;
      curNode.prev = prevNode;
    }
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.end) {
    return this.end.val;
  }
  return ''
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (this.head) {
    return this.head.val
  }
  return ''
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */


var obj = new AllOne()
obj.inc('hello')
obj.inc('hello')
obj.inc('leet')
// // obj.inc('leet')
// // obj.inc('leet')
// // obj.inc('hello')
// obj.dec('ok')
obj.dec('leet')
obj.dec('hello')
obj.dec('hello')
// obj.inc('hello')
