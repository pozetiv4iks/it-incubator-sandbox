function digPow(n, p){
    let lastNum = 0;
    let array = [...n.toString()].map(Number);
    for(let i = 0; i < array.length; i++){
      lastNum += Math.pow(array[i], p + i )
    }
    if (lastNum % n !== 0){
      return -1
    } else {
      return lastNum / n
    }
  }