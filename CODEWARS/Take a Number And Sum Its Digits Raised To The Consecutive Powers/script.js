function sumDigPow(a, b) {
    let result = [];
   
     for (let i = a; i <= b; i++) {
       let sum = 0;
       let str = i.toString();
   
       for (let j = 0; j < str.length; j++) {
         sum += Math.pow(parseInt(str[j]), j + 1);
       }
   
       if (sum === i) {
         result.push(i);
       }
     }
   
     return result;
   }

   