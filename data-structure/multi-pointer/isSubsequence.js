log = console.log;

function isSubsequence(arg1, arg2) {
  if (arg1.length > arg2.length || !arg1.length) {
    return false;
  }

  if (arg1 === arg2) {
    return true;
  }

  let left = 0;
  let right = 0;

  while (right < arg2.length) {
    if (left === arg1.length - 1) {
      return true;
    }

    if (arg1[left] === arg2[right]) {
      left += 1;
    }

    right += 1;
  }

  return false;
}

/* 
  Time: O(n + m)
  Space: O(1)

  isSubsequence('hello', 'hello world'); // true
  isSubsequence('sing', 'sting'); // true
  isSubsequence('abc', 'abracadabra'); // true
  isSubsequence('abc', 'acb'); // false (order matters)
*/

log(isSubsequence("hello", "hello world"));
log(isSubsequence("sing", "sting"));
log(isSubsequence("abc", "abracadabra"));
log(isSubsequence("abc", "acb"));
