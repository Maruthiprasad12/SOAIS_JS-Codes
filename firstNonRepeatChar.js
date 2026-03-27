function firstNonRepeating(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde")); // c