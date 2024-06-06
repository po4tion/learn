log = console.log;

function linearSearch(list, target) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === target) {
      return i;
    }
  }

  return -1;
}

/* 
  linearSearch([10, 15, 20, 25, 30], 15) // 1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
  linearSearch([100], 100) // 0
  linearSearch([1,2,3,4,5], 6) // -1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
  linearSearch([100], 200) // -1
*/

log(linearSearch([10, 15, 20, 25, 30], 15));
log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
log(linearSearch([100], 100));
log(linearSearch([1, 2, 3, 4, 5], 6));
log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
log(linearSearch([100], 200));
