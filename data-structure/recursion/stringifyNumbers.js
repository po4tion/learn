function stringifyNumbers(input) {
  const newInput = JSON.parse(JSON.stringify(input));

  for (const [key, value] of Object.entries(newInput)) {
    if (typeof value === "number") {
      newInput[key] = value.toString();
    } else if (JSON.stringify(value).charAt(0) === "{") {
      newInput[key] = stringifyNumbers(newInput[key]);
    } else if (Array.isArray(value)) {
      newInput[key] = Object.values(stringifyNumbers(Object.assign({}, value)));
    }
  }

  return newInput;
}

const obj = {
  num: 1,
  test: [1, 2, 3, 4, { name: 11 }],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
