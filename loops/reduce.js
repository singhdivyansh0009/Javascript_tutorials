/* 
  -> reduce() is an array method that helps to reduce the value in single value
     by executing a function against accumulator and each value of array.
  -> accumulator is just a variable that holds the returned value of the function 
     for each iteration 
  -> parameters : reduce(callback, initialValue of accumulator)
  -> callback function takes two parameters : accumulator and current value
*/
const myNum = [1,2,3,4];
// const totalSum = myNum.reduce((acc,curVal)=>acc+curVal, 0);
// can also be written as
const totalSum = myNum.reduce(function(acc,curVal){
    return acc + curVal;
}, 0)
console.log(totalSum);

const productCart = [
     {
        name : 'shoes',
        price : 100
     },
     {
        name : 'ball',
        price : 200
     },
     {
        name : 'bat',
        price : 300
     }
];
// reduce method with array of object
const totalPrice = productCart.reduce((acc,item)=>acc+item.price , 0);
console.log(totalPrice);

// Note : if we don't pass the initial value then accumulator took first element of array as initial value
const totalSum1 = myNum.reduce((acc,curVal)=>acc+curVal);  
console.log(totalSum);

// but in the case of applying reduce method on object without initial value 
// it will not work properly
const totalPrice1 = productCart.reduce((acc,item)=>acc+item.price);
console.log(totalPrice1);
/*
  The output [object Object]200300 occurs because the acc (accumulator) in your reduce function 
  is starting as an object (not a number), and when you try to add an object to a number,
  JavaScript automatically converts the object to a string using its toString() method, 
  which results in [object Object].
*/