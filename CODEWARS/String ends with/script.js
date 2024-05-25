function solution(str, ending){
    // TODO: complete
    if (ending !== ''){
   return str.slice(0 - ending.length) === ending;
  }else{
    return true;
  }
  }