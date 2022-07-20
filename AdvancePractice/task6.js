var intersection = function(arr1, arr2) {
    let arr = [];
  for(let j = 0; j < arr1.length; j++){
    for(let i = 0; i < arr2.length; i++){
    if (arr1[j] == arr2[i]) {
      if (arr.includes(arr1[j])) {
        continue;
      } else {
       arr.push(arr1[j])
      }
    }
    }
  }
    return arr;
  }