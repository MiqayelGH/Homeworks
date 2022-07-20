function anotherFib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
console.log(`Recursive fib`,anotherFib(7));

function arrFib(n) {
    if (n < 2) {
        return;
    }
    let fibArr = [1, 2];
    for (let i = 0; i < n - 2; i++) {
        fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
   }
   return fibArr;
}
console.log(`Fib array`, arrFib(34));