function findUniq(arr) {
    const counts = new Map();
   for (const num of arr) {
     counts.set(num, (counts.get(num) || 0) + 1);
   }
   for (const [num, count] of counts) {
     if (count === 1) {
       return num;
     }
   }
   
 }