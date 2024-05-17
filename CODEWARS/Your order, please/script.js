function order(words){
    // ...
   if (!words) return '';
  
    const wordsArray = words.split(' ');
    const sortedWords = [];
  
    for (let i = 1; i <= 9; i++) {
      const wordWithNumber = wordsArray.find(word => word.includes(i.toString()));
      if (wordWithNumber) {
        sortedWords.push(wordWithNumber);
      }
    }
  
    return sortedWords.join(' ');
  }