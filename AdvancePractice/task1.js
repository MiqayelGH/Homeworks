// Հաշվել տրված թվի թվանշանների գումարը։ Օրինակ, տրված է 4637, վերադարձնել 4+6+3+7։

function sumOfNum(num) {
    let sum = 0;
    num = String(num).split("");
    num.forEach((elem) => {
        return (sum += Number(elem))
    });
    return sum;
} 
console.log(sumOfNum(412312))