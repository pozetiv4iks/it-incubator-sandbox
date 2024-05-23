function expressionMatter(a, b, c) {
    let max = 0
  max = Math.max(max, a + b + c);
  max = Math.max(max, a * b * c);
  max = Math.max(max, a * (b + c));
  max = Math.max(max, (a + b) * c);
  max = Math.max(max, a + b * c);
  max = Math.max(max, a * b + c);
  
  return max;
}