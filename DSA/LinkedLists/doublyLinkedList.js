class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Insert at the beginning
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
  }

  this.head = newNode;

  if (this.tail === null) {
    this.tail = newNode;
  }
};

// Insert at the end
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

// Insert at given node
DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  if (prevNode == null) {
    console.log("Invalid prev node");
    return;
  }

  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }

  prevNode.next = newNode;

  //tail
  if (newNode.next == null) {
    this.tail = newNode;
  }
};

// Delete first node
DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return; // nothing to delete in when there is no head/first node
  }

  // when there is only single  node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

// Delete Last node
DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    return; // nothing to delete in when there is no tail/last node
  }

  // when there is only single node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// Reverse doubly linked list
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current != null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // move to next node
    current = current.prev;
  }

  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
