class Stack {
  constructor() {
    this.value = [];
  }

  size() {
    return this.value.length;
  }

  push(value) {
    this.value.push(value);
  }

  pop() {
    if (this.value.length === 0) {
      throw new Error("There is no value.");
    }

    return this.value.pop();
  }

  peek() {
    if (this.value.length === 0) {
      throw new Error("There is no value.");
    }

    return this.value.at(-1);
  }
}

module.exports = Stack;
