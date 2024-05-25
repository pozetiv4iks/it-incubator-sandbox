function century(year) {
    // Finish this :)
    if (year%100 !== 0){
      return Math.ceil(year / 100);
    }else{
    return Math.floor(year / 100);}
  }
  