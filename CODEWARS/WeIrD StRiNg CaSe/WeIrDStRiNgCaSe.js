function toWeirdCase(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let newWord = '';
      for (let j = 0; j < word.length; j++) {
        let char = word[j];
        if (j % 2 === 0) {
          newWord += char.toUpperCase();
        } else {
          newWord += char.toLowerCase();
        }
      }
      words[i] = newWord;
    }
    let result = words.join(' ');
    return result;
  }