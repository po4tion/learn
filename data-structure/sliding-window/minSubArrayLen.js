log = console.log;

function minSubArrayLen(inputs, number) {
  let left = 0;
  let right = 0;
  let sum = inputs[0];
  let result = Infinity;

  while (right < inputs.length) {
    if (sum < number) {
      right += 1;
      sum += inputs[right];
    } else {
      result = result > right - left + 1 ? right - left + 1 : result;
      sum -= inputs[left];
      left += 1;
    }
  }

  return result === Infinity ? 0 : result;
}

/* 
  Time: O(n)
  Space: O(1)  
2 5 6 6
  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
  minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
  minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
  minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/

log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
log(minSubArrayLen([2, 1, 6, 5, 4], 9));
log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
