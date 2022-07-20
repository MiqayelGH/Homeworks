// Հաշվել տրված թվի թվանշանների արտադրյալի և գումարի տարբերությունը։ 
// Օրինակ, տրված է 4637, վերադարձնել (4*6*3*7) - (4+6+3+7)։

function multAndDif(num) {
    let sum = 0;
    let mult = 1;
        num = String(num).split("");
        num.forEach((elem) => {
            return (sum += Number(elem))
        });
        num.forEach((elem) => {
            return (mult *= Number(elem))
        });

    return mult - sum;  
} 
console.log(multAndDif(412341))