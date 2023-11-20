class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, prev: this.head };

    this.head = node;
    this._size += 1;
  }

  pop() {
    if (this.head === null) {
      throw new Error("There is no value.");
    }

    const node = this.head;
    this.head = node.prev;
    this._size -= 1;

    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error("There is no value.");
    }

    return this.head.item;
  }
}

module.exports = Stack;
