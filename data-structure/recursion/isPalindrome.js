function isPalindrome(input) {
  if (input.length <= 1) {
    return true;
  }

  if (input[0] !== input[input.length - 1]) {
    return false;
  }

  return isPalindrome(input.slice(1, input.length - 1));
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
