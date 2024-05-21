function capitalizeWords(words) {
  const result = [];

  if (words.length !== 0) {
    result.push(words[0].toUpperCase(), ...capitalizeWords(words.slice(1)));
  }

  return result;
}

console.log(capitalizeWords(["banana", "apple", "orange", "lemon"]));
