log = console.log;

function maxSubarraySum(inputs, range) {
  if (inputs.length < range) {
    return null;
  }

  const sumInputs = [inputs[0]];
  let max = 0;

  for (let i = 1; i < inputs.length; i++) {
    sumInputs.push(sumInputs[i - 1] + inputs[i]);
  }

  max = sumInputs[range - 1];

  for (let i = range; i < inputs.length; i++) {
    const current = sumInputs[i] - sumInputs[i - range];
    max = max > current ? max : current;
  }

  return max;
}

/* 
  Time: O(n)
  Space: O(1)

  maxSubarraySum([100,200,300,400], 2) // 700
  maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
  maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
  maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
  maxSubarraySum([2,3], 3) // null
*/

log(maxSubarraySum([100, 200, 300, 400], 2));
log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
log(maxSubarraySum([2, 3], 3));
