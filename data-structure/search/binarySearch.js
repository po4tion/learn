log = console.log;

function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (list[middle] === target) {
      return middle;
    }

    if (list[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

/* 
  binarySearch([1,2,3,4,5],2) // 1
  binarySearch([1,2,3,4,5],3) // 2
  binarySearch([1,2,3,4,5],5) // 4
  binarySearch([1,2,3,4,5],6) // -1
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10) // 2
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95) // 16
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100) // -1
*/

log(binarySearch([1, 2, 3, 4, 5], 2));
log(binarySearch([1, 2, 3, 4, 5], 3));
log(binarySearch([1, 2, 3, 4, 5], 5));
log(binarySearch([1, 2, 3, 4, 5], 6));
log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    10
  )
);
log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    95
  )
);
log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    100
  )
);
