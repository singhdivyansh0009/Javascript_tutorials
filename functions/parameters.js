// fixed number of argument
function swap(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
}
let a = 1;
let b = 2;
swap(a,b);  // this function is call by value (all the premetive types are call by value)
console.log(a+" "+b); // because there is no change in the original variable

/*
  -> pass by reference  (the change occurs in original variable on performing some operation)
  -> it will acheived by passing object or array as parameters
*/
function reverse(arr){
    arr = arr.reverse();
}
const arr = [1,2,3];
reverse(arr);
console.log(arr); // the change is visible

// passing the object
const changeName = (obj) => {
    obj.name = "Ram";
};
  
const obj = {
    name: "Raju",
    age: 20
  };

changeName(obj); // Modify the object's name
console.log(obj)
  
/*
->undefinite no. of parameter 
-> we can pass variable sized parameter using ... rest operator
-> varibale with rest operator stored the value in the form of array
*/
const myFunction = (...num) => {
     return num;
}
console.log(myFunction(1,2));
console.log(myFunction(1,2,3));

// we can use destructuring if wants to extract some data as parameter from the object
const myFunction2 = ({name,gender}) =>{
   console.log(name);
   console.log(gender);
}
const obj1 = {
    name : "Alice",
    age : 20,
    gender : "female"
};
myFunction2(obj1); // passing object as parameter

// we can also use argument object for n no. of variables

function all() {
  for (let i = 0; i < arguments.length; i++) {
   console.log(arguments[i]);
  }
}
all(1, 123, 500, 115, 44, 88);

/* implicit return and explicit return in arrow function */
/* 
    -> both below are the example of implicit return in which the value are automatically return 
       without using return key word
    -> There are mostly used when we have single line definition of the function
*/
const fun = (num) => num*10;
const fun1 = (num) => (num*10); // these are used mostly for returning the object which is present in curly braces
// const fun2 = () => {Name:'Ram',Age:20};  //we cannot return the object like this
const fun2 = () => ({Name:'Ram',Age:20}); // it is the right syntax
console.log(fun2());

/* Example of explicit return */
/* it will not return any value implicitly because written in { } braces */
const fun3 = (num) =>{
     num*10;
}
// we have to return the value using return keyword
const fun4 = (num) =>{
     return num*10;
}
console.log(fun4(10));