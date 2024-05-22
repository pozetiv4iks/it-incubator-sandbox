function isPangram(string) {
    string = string.toLowerCase();
  
    const uniqueChars = [];
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
  
      if (char >= 'a' && char <= 'z') {
        if (!uniqueChars.includes(char)) {
          uniqueChars.push(char);
        }
      }
    }
  
    return uniqueChars.length === 26;
  }