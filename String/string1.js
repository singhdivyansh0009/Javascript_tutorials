/* string is a sequence of characters */
/* declarations of string */
let str = "Hello, World!";  // In double quotes 
str = 'hello world'; // In single quotes
str = `hello` // In back tick also called string templates
console.log(str);

/* Another way of declaration of string */
const s3 = new String("Hello");
console.log(typeof s3); // it return object
console.log(s3); // it will give string object 
                 // {0:"H", 1 : "e", 2 : "l", 3 : "l", 4: "o", Prototype object that contains string methods}

/*Note : Strings in javascript are immutable */
str[0] = 'H';  // it cannot change the value of original string
console.log(str);

// To use single quotes or double quotes inside the string between '' or " " respectively
// we have to use \
// let s = 'Ram's car'; // it will give error
let s = 'Ram\'s car';
console.log(s);

// String templates or template literals: it use back tick (``) instead of '' or " "
// it is used to insert variables inside the string
let Name = "John";
let intro = `My name is ${Name}.`  // it is called string interpolation
console.log(intro);

// we can also use expression inside of template literals
let num = 10;
let ans = `The square of ${num} is ${num*num}`;
console.log(ans);

