const sumOfUnique = function(nums) {
    const obj = {};
    let sum = 0;
    for (let i of nums) {
        !obj[i] ?  obj[i] = 1 : obj[i]++;
     }
   for (let key in obj) {
       if (obj[key] == 1) {
          sum += Number(key);
     };
   };
   return sum;
};