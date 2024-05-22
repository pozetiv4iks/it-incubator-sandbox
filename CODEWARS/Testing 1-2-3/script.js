var number=function(array){
    let arr = [];
    for(let i = 0; i < array.length; i++){
      arr.push(`${i + 1}: ${array[i]}`);
    }
    return arr
  }