function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
          return [];
      }
  
      let positivesCount = 0;
      let negativesSum = 0;
  
      for (let i = 0; i < input.length; i++) {
          if (input[i] > 0) {
              positivesCount++;
          } else if (input[i] < 0) {
              negativesSum += input[i];
          }
      }
  
      return [positivesCount, negativesSum];
  }