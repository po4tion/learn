log = console.log;

function sameFrequency(num1, num2) {
  const frequency = {};

  for (const num of num1.toString()) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (const num of num2.toString()) {
    if (!frequency[num]) {
      return false;
    } else {
      frequency[num] -= 1;
    }
  }

  return true;
}

/* 
  Time: O(n)
  sameFrequency(182,281) // true
  sameFrequency(34,14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false
*/

log(sameFrequency(182, 281));
log(sameFrequency(34, 14));
log(sameFrequency(3589578, 5879385));
log(sameFrequency(22, 222));
