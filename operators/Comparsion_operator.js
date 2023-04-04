/* In comparsion operator if the expression is correct 
   it gives true otherwise it gives false */
let a = 10;
let b = 20;
console.log("is a == b : ",a==b);
console.log("is a != b : ",a!=b);
console.log("is a >= b : ",a>=b);
console.log("is a <= b : ",a<=b);
console.log("is a > b : ",a>b);
console.log("is a < b : ",a<b);

let x = 10;
let y = "10";
console.log("is x == y : ", x==y); // gives true because it only compare values not types
console.log("is x != y : ", x!=y);
/* 
->  "===" operator check the equality of values and types means,
    it gives true if the value and its type are equal

->  "!==" operator also works same as === but it gives true,
     if type is not equal 
 */ 
console.log("is x === y : ", x===y);  
console.log("is x !== y : ", x!==y);

/* ternary operator works same as in c/c++  */
console.log("max of a and b :",(a>b)?a:b);

