function fakeBin(x){
    let string = `${x}`;
    let y = '';
    let len = string.length;
    for (let i = 0; i < len; i++){
      if (Number(string[i]) >=5){
        y = y+'1';
      }else{y = y+'0'}
    }
      return y;
    }