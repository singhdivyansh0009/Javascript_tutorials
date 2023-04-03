/*
** rules for variable name:
-> Must begin with $ , _ or a letter 
-> hello and Hello are two diffrent variable 
-> variable name cannot be start with digits or special symbols except above 
*/


/* Data type can be dynamically changed in the javascript 
   we do not need to write diffrent data type like in c / c++ */

// Example :
   let x = 10;
   let y = "hello";
   let z = 4.5;
   let ch = 'c';
   let r = undefined;

/* var type variable can be changed from any where in the program */
/* var is not preferrable to use as it is a part of old version */
var a = 10;
  console.log(a);
a = "hello";
  console.log(a);

  
/* As there is drawbacks in the var type , the let type is introduce in ES6 version of javascript 
   it is block scoped type means the outside value of that variable cannot be affected by change 
   in inside the block if the same name variable is declared in a block */
let b = 20;
  console.log("value of b :" + b);
{
  let b = "hello";
     console.log("Blocked Value of b : "+ b);
}
  console.log("outside value : "+ b);

/* let n = 30;       
   let n ="hello";   
   it is  not allowed , we cannot redeclare a same variable
   but we can update the variable with other value
 */
let n = 30;
    console.log("value of n :"+ n);
  n = "hello";
    console.log("New value of n : "+ n);


const c = 10;
  console.log(c); 
// a = "hello";  cannot change the value of const type variable throughout the program
//   console.log(a);