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

// Delete the last node
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

// Delete a node with given key
LinkedList.prototype.deleteByKey = function (key) {
  if (!this.head) {
    console.log("list is empty");
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }

    current = current.next;
  }
};

// Search operation
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.next.data === key) {
      return true;
    }

    current = current.next;
  }

  return false;
};

// Traversal operation
LinkedList.prototype.printList = function () {
  let current = this.head;

  let listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  console.log(listValues.join("->"));
};

// reverse a linked list
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
};

/*run the code as below */
const ll = new LinkedList();

ll.insertAtBeginning(2);
ll.insertAtEnd(10);

ll.printList();

ll.reverse();

ll.printList();
