class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insert at end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

// Insert at given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete the first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }

  this.head = head.next;
};

//Delete the last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return;
  }

  if (!this.head.next) {
    this.head = null;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};
