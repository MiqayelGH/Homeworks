const path = require('path');
const fs = require('fs/promises');
let obj = {};
let arr = [];
function randomNum(){
return Math.round(Math.random()*200);
}
async function writeSorted(obj){
  let arr2 = [];
  for(let j in obj){
    let length = Number(obj[j]);
    for(let i = 0; i < length;i++){
        if(arr2.length > 1_000_000){
        fs.appendFile(
        path.resolve('./sortedNumbers.txt'), 
        arr2.toString())       
        arr2 = [];
        }else{
          arr2.push(j);
        }
      }
  }
}
async function write(){
        for(let j = 0 ; j < 1_000_000_000 ; j++){
          if(!obj[randomNum()]){
            obj[randomNum()] = 1;
          }else{
            obj[randomNum()]++;
          }
              if(arr.length > 1_000_000){
              fs.appendFile(
              path.resolve('./numbers.txt'), 
              arr.toString())       
              arr = [];
              }else{
                arr.push(randomNum())
              }
        }
  
}
write()
writeSorted(obj);




