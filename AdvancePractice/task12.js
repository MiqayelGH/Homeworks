const isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9\s]/gi, ' ');
       s = s.toLowerCase();
       s = s.split(" ").join("")
       return s === s.split('').reverse().join("");
  };