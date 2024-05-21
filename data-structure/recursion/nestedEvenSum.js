function nestedEvenSum(nest) {
  const result = [];

  for (const value of Object.values(nest)) {
    if (JSON.stringify(value).charAt(0) === "{") {
      result.push(nestedEvenSum(value));
    } else if (value % 2 === 0) {
      result.push(value);
    }
  }

  return result.reduce((acc, cur) => acc + cur);
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
