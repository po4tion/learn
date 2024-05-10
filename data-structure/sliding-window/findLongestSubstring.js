log = console.log;

function findLongestSubstring(inputs) {
  let longestSubstring = [];
  let baseIndex = 0;
  let currentIndex = 0;
  const alphabetCounter = {};

  while (currentIndex < inputs.length) {
    const alphabet = inputs[currentIndex];

    if (!alphabetCounter[alphabet]) {
      alphabetCounter[alphabet] = 1;
      currentIndex += 1;
    } else {
      longestSubstring.push(currentIndex - baseIndex);
      alphabetCounter[inputs[baseIndex]] -= 1;
      baseIndex += 1;
    }
  }

  // 마지막 문자가 중복이 아닐 경우에 else문이 실행되지 않으므로 substring을 다시 한번더 계산
  longestSubstring.push(currentIndex - baseIndex);

  return Math.max(...longestSubstring);
}

/* 
  Time: O(n)

  findLongestSubstring('') // 0
  findLongestSubstring('rithmschool') // 7
  findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longests ubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6
*/

log(findLongestSubstring(""));
log(findLongestSubstring("rithmschool"));
log(findLongestSubstring("thisisawesome"));
log(findLongestSubstring("thecatinthehat"));
log(findLongestSubstring("bbbbbb"));
log(findLongestSubstring("longestsubstring"));
log(findLongestSubstring("thisishowwedoit"));
