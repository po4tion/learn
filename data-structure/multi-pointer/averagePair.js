log = console.log;

function averagePair(inputs, average) {
  const originAverage = average * 2;

  if (inputs.length <= 1 || !Number.isInteger(originAverage)) {
    return false;
  }

  let left = 0;
  let right = inputs.length - 1;

  while (left !== right) {
    if (inputs[left] + inputs[right] === originAverage) {
      return true;
    } else if (inputs[left] + inputs[right] > originAverage) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return false;
}

/* 
  Time: O(n)
  Space: O(1)

  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false
*/

log(averagePair([1, 2, 3], 2.5));
log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
log(averagePair([], 4));
