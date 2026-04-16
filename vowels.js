function countVC(str) {
  let vowelsList = "aeiou"; // store vowels
  let vowels = 0, consonants = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (vowelsList.includes(ch)) {    
      vowels++;
    } else if (ch >= 'a' && ch <= 'z') {
      consonants++;
    }
  }

  console.log("Vowels:", vowels, "Consonants:", consonants);
}

countVC("hello");