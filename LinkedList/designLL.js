function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let current = this.head;
  if (index < 0 || index >= this.size) {
    return -1;
  } else {
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newnode = new Node(val);
  newnode.next = this.head;
  this.head = newnode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newnode = new Node(val);
  if (this.head == null) {
    this.head = newnode;
  } else {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newnode;
  }
  size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index >= size) return;
  let newnode = new Node(val);

  let current = this.head;
  if (index == 0) {
    this.addAtHead(val);
  } else if (index == this.size) {
    this.addAtTail(val);
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newnode.next = current.next;
    current.next = newnode;
  }

  size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= size) return;

  if (index == 0) {
    this.head = this.head.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.
