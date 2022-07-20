const findShortestSubArray = function(nums) {
    const obj = {};   
     for (let i of nums) {
         !obj[i] ? obj[i] = 1 :  obj[i]++;
     }
    const degree = Object.values(obj).sort((a,b) => {return b - a})[0];
 
    let maxValue = [];
    for (let key in obj) {
      if (obj[key] == degree) {
      maxValue.push(Number(key)); 
      }
    }
 
    let lenArr = [];
    for (let i of maxValue) {
     lenArr.push([nums.lastIndexOf(i) - nums.indexOf(i) + 1])
    }  
 
   return lenArr.sort((a,b) => {return a - b})[0];  
 };
