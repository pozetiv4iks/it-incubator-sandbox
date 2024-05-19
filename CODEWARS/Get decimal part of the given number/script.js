function getDecimal(n){
    if (typeof n == 'number'){
      if(n<1){
      n = -(n%1);
        }else{n = n%1}
    }
    return n // fix me 
  }