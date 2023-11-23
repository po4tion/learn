const Stack = require("../stack.js");

describe("Stack Fn", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should be empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("should be push fn, return length 1", () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
  });

  describe("Pop Fn", () => {
    it("should be pop fn, return length 2", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();

      expect(stack.size()).toBe(2);
      expect(stack.pop()).toBe(2);
    });

    it("should be pop fn, return Error", () => {
      expect(() => stack.pop()).toThrow("There is no value.");
    });

    it("should be pick fn, return 1", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toBe(3);
    });

    it("should be pick fn, return error", () => {
      expect(() => stack.peek()).toThrow("There is no value.");
    });
  });
});
