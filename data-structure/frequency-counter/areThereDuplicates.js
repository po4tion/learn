log = console.log;

function areThereDuplicates(...args) {
  const frequency = {};

  for (const arg of args) {
    const stringArg = arg.toString();

    frequency[stringArg] = (frequency[stringArg] || 0) + 1;

    if (frequency[stringArg] > 1) {
      return true;
    }
  }

  return false;
}

/* 
  Time: O(n)
  Space: O(n)

  #or
  Time: O(n log n)
  Space: O(1)

  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

log(areThereDuplicates(1, 2, 3));
log(areThereDuplicates(1, 2, 2));
log(areThereDuplicates("a", "b", "c", "a"));
