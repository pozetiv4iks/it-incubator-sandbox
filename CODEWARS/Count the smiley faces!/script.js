//return the total number of smiling faces in the array
function countSmileys(arr) {
    let score = 0;
    for ( let i = 0; i < arr.length; i++){
      let arra = arr[i].split("");
      if(arra.length === 3){
        if(arra[arra.length-1] === ")" || arra[arra.length-1] === "D" ){
          if(arra[1] === "-" || arra[1] === "~" )
            if(arra[0] === ":" || arra[0] === ";"){
              score ++
            }
          }
        } else if(arra.length === 2){
          if(arra[arra.length-1] === ")" || arra[arra.length-1] === "D" ){
            if(arra[0] === ":" || arra[0] === ";"){
              score ++
        }
      }      
    }
  }
    return score
  }