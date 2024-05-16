log = console.log;

const memoization = [1, 1];

function fib(n) {
  if (memoization.length < n) {
    memoization.push(fib(n - 1) + fib(n - 2));
  }

  return memoization[n - 1];
}

/* 
  fib(4) // 3
  fib(10) // 55
  fib(28) // 317811
  fib(35) // 9227465
*/

fib(4);
log(fib(4));
log(fib(10));
log(fib(28));
log(fib(35));
