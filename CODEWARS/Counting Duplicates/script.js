function duplicateCount(text){
    text = text.toLowerCase();
    let charCount = {};
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    let duplicates = 0;
    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates++;
      }
    }
  
    return duplicates;
  }