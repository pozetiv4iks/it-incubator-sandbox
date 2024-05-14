function nextBigger(n){

    let digits = Array.from(String(n), Number);
    let length = digits.length;
    let i;
    for (i = length - 1; i > 0; i--) {
      if (digits[i] > digits[i - 1]) {
        break;
      }
    }
  
    if (i === 0) {
      return -1; 
    }
    let smallest = i;
    for (let j = i + 1; j < length; j++) {
      if (digits[j] > digits[i - 1] && digits[j] < digits[smallest]) {
        smallest = j;
      }
    }
    [digits[i - 1], digits[smallest]] = [digits[smallest], digits[i - 1]];
    let sortedDigits = digits.slice(i).sort((a, b) => a - b);
    let result = parseInt(digits.slice(0, i).concat(sortedDigits).join(''));
    return result;
  }
  