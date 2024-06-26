log = console.log;

function countUniqueValues(values) {
  // 배열의 길이가 0일 때 처리
  if (values.length < 1) {
    return values.length;
  }

  let leftIndex = 0;

  for (let rightIndex = 1; rightIndex < values.length; rightIndex += 1) {
    if (values[leftIndex] !== values[rightIndex]) {
      values[++leftIndex] = values[rightIndex];
    }
  }

  return leftIndex + 1;
}

log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
log(countUniqueValues([])); // 0
log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
