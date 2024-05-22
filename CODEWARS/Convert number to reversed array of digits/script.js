function digitize(n) {
    let arr = String(n).split('');
    let array = [];
    for(let i = 0; i< arr.length; i++){
      array.push(Number(arr[i]));
    } return array.reverse()
  }