log = console.log;

function recursiveRange(range) {
  if (range === 0) {
    return 0;
  }

  return range + recursiveRange(range - 1);
}

/* 
  recursiveRange(6) // 21
  recursiveRange(10) // 55
*/

log(recursiveRange(6));
log(recursiveRange(10));
