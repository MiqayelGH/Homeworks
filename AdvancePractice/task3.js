// Գրել ֆունկցիա, որը ստանում է միջակայքի սկիզբ և վերը (երկու թվեր) և 
// հաշվում միջակայքում գտնվող կենտ թվերի քանակը։ 
// Օրինակ, 3 և 7 միջակայքում կա երեք կենտ թիվ (3, 5, 7)։

function getNotEvenNum(a,b) {
    let arr = [];
        for (let i = a; i <= b; i++){
          if (i % 2 !== 0) {
              arr.push(i)
          }
      }
      return arr;
}
console.log(getNotEvenNum(2, 9))