const sortArrayByParity = function(nums) {
    let arrOfEven = [];
    let anotherArr = [];
        for (let i of nums) {
            i % 2 == 0 ?  arrOfEven.push(i) : anotherArr.push(i);
        }
     return [...arrOfEven, ...anotherArr];
    };