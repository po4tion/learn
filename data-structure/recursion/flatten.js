function flatten(list) {
  if (list.length === 0) {
    return [];
  }

  if (Array.isArray(list[0])) {
    return flatten([...list[0], ...list.slice(1)]);
  }

  return [list[0], ...flatten(list.slice(1))];
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
