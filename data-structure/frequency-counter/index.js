log = console.log;

function validAnagram(compare1, compare2) {
  if (compare1.length !== compare2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const value of compare1) {
    if (frequencyCounter1[value]) {
      frequencyCounter1[value] += 1;
    } else {
      frequencyCounter1[value] = 1;
    }
  }

  for (const value of compare2) {
    if (frequencyCounter2[value]) {
      frequencyCounter2[value] += 1;
    } else {
      frequencyCounter2[value] = 1;
    }
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

log(validAnagram("", "")); // true
log(validAnagram("aaz", "zza")); // false
log(validAnagram("anagram", "nagaram")); // true
log(validAnagram("rat", "car")); // false
log(validAnagram("awesome", "awesom")); // false
log(validAnagram("qwerty", "qeywrt")); // true
log(validAnagram("texttwisttime", "timetwisttext")); // true
