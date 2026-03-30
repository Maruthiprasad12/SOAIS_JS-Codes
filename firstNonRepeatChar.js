function firstNonRepeating(str) {
  let count = {};
//First loop → counts frequency of each character
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count[ch] = (count[ch] || 0) + 1;           
  }
//Second loop → finds the first character with count = 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }
                 
  return null;
}

console.log(firstNonRepeating("aabbcde")); // c