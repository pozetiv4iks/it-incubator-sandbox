function howManyStep(a,b){
    let res = 0;
     while(a < b){
      b % 2 === 0 && b / 2 >= a ? b /= 2 : b--;
      res++;
    }
    return res;
  }