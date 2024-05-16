log = console.log;

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

/*
  factorial(1) // 1
  factorial(2) // 2
  factorial(4) // 24
  factorial(7) // 5040
*/

log(factorial(1));
log(factorial(2));
log(factorial(4));
log(factorial(7));
