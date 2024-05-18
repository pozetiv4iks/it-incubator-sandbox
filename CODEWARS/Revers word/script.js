function reverseWords(str) {
    let words = str.split(" ");
   
 
   let reversedWords = words.map(word => {
     return word.split("").reverse().join("");
   });
 
   let reversedString = reversedWords.join(" ");
   
   return reversedString;
 }
 