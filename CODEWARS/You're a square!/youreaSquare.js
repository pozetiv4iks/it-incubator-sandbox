var isSquare = function(n){
    if(Math.sqrt(n) < 0){
      return false
    } else{
      if (Math.sqrt(n) % 1 === 0){
        return true;
      } else {
        return false;
      }
    }
  }