/*
   -> Map is a built-in array method that creates a new array 
      by applying a given function to every element of the original array.

   -> The map method is particularly useful when you need to transform 
      the elements of an array without modifying the original array.
*/
const myNum = [1,2,3,4,5,6,7];
let newNum = myNum.map((value)=>{
    return value*10;
})
console.log(newNum);

// Q. WAP to return array of square of number that are even

/* 
let evenNumSqr = myNum.map((value)=> {
    if(value%2===0)
       return value*value;
})
console.log(evenNumSqr);
*/

// The above program makes holes for the odd numbers because map function need return value for each element.
// First we have to filter the even and then apply map of filtered value.
// we can use chaining for this.
let evenNumSqr = myNum
                 .filter((value)=>value%2===0)
                 .map((value)=> value*value);
console.log(evenNumSqr);

/* 
    we can also use the map and filter in returning the elements of html for diffrent data of an array
    Example is given in index.html and script.js 
*/