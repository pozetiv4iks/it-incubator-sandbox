function duplicateEncode(word){
    const lowercaseWord = word.toLowerCase();
    const charCounts = {};
    for (let i = 0; i < lowercaseWord.length; i++) {
      const char = lowercaseWord[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    let result = '';
    for (let i = 0; i < lowercaseWord.length; i++) {
      const char = lowercaseWord[i];
      result += charCounts[char] > 1 ? ')' : '(';
    }
    return result;
  }
  