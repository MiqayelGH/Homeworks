const buildArray = function(target, n) {
    let arr = [];
    let len = target[target.length-1] > n ? n: target[target.length-1];

   for (let i = 1; i <= len; i++) {
    target.includes(i) ? arr.push("Push") : arr.push("Push","Pop");
  }

    return arr;
  }