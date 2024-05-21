function capitalizeFirst(list) {
  const result = [];

  if (list.length !== 0) {
    const firstChar = list[0].charAt(0).toUpperCase();
    const addChar = firstChar + list[0].slice(1);

    result.push(addChar, ...capitalizeFirst(list.slice(1)));
  }

  return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(["", "taco", "banana"]));
