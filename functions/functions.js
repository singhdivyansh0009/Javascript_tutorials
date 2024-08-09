// declaration of function
// using function keyword
function sum(x,y)
{
  return x+y;
}

// function expression
// the function should be anonymous in function expression
// (it will work with the name function but that is not a good practice)
const sub = function (x,y){
    return x - y;
}
console.log(sub(5,3));

// self invoked function
// it will may be used for fetching the data on loading of the page and performe some operation
(function(){
    console.log("Hello, world!"); 
})();

// arrow function
// used as shorthand and there is no need for the function keyword
const arrowFunction = () => {
    console.log("This arrow function");
}

