function maskify(cc) {
    let num = "";
    if(cc.length <= 4){
      return cc
    } else{
    for(let i = 0; i < cc.length-4; i ++){
      num+= '#'
    }
    return num + cc.slice(cc.length-4)
      }
  }