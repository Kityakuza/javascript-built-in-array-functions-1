let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.filter((item) => item.length >= 5);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
