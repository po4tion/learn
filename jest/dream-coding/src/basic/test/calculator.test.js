const Calculator = require("../calculator.js");

describe("Calculator Working...", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("should set 100", () => {
    calc.set(100);
    expect(calc.value).toBe(100);
  });

  it("should clear => 0", () => {
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it("should add 3", () => {
    calc.add(3);
    expect(calc.value).toBe(3);
  });

  it("should subtract -1", () => {
    calc.subtract(1);
    expect(calc.value).toBe(-1);
  });

  it("should multiply 24", () => {
    calc.set(2);
    calc.multiply(12);
    expect(calc.value).toBe(24);
  });

  it("should divide", () => {
    calc.set(24);
    calc.divide(5);
    expect(calc.value).toBe(4.8);
  });

  it("should add throw error", () => {
    expect(() => calc.add(200)).toThrow("Value can not be greater than 100");
  });
});
