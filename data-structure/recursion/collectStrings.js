function collectStrings(input) {
  const result = [];

  for (const value of Object.values(input)) {
    if (typeof value === "string") {
      result.push(value);
    } else if (JSON.stringify(value).charAt(0) === "{") {
      result.push(...collectStrings(value));
    }
  }

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
