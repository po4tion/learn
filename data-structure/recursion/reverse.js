function reverse(input) {
  if (input.length <= 1) {
    return input[0];
  }

  return reverse(input.slice(1)) + input[0];
}

/* 
  reverse("awesome") // emosewa
  reverse("rithmschool") // loohcsmhtir
*/

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
