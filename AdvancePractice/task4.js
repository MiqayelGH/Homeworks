function fib() {
    let fibArr = [1,2];
    let sum = 0;
        for (let i = 0; i < 50; i++) {
            fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
        };

     fibArr.forEach((elem) => {
         return elem > 4000000 ? sum : elem % 2 == 0 ? (sum += elem) : sum += 0;
        })

    return sum;
  }

  console.log(fib())
