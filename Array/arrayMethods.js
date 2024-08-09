/*Various array methods and properties*/
let a = [1,2,3,4,5];
console.log(a.length); // returns the length of an array
let str = a.toString(); // returns the string format of array
console.log(str); 
console.log(a.at(2)); //returns the value at that index
/*  
    The join() method also joins all array elements into a string.
    It behaves just like toString(), but in addition you can specify the separator
*/
let newStr = a.join(" ");
console.log(newStr);
// add a new element at the end of the array
a.push(6,7,8);
console.log(a);
// The splice() method also adds new items to an array from any index
// param: (indexOfInsertion,no. of element to be removed, ...elements to be inserted)
a.splice(2,0,9,10);
// remove and return the value present at the end
let poppedElement = a.pop(); 
console.log(a);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// Also return the shifted element
let shiftedElement = a.shift();
console.log(shiftedElement); // output : 1
console.log(a); // output: [ 2, 3, 4, 5 ]

//The unshift() method adds a new element to an array (at the beginning).
console.log(a.unshift(1)); // output : last element of the array
console.log(a); // output : [ 1, 2, 3, 4, 5 ]

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2,arr3);  // can merge two array or many array
console.log(myChildren);

// merging using spread operator
const newMychildren = [...arr1, ...arr2];
console.log("using spread ",newMychildren);

// to get some part of the array in the form of array
// param: (startingIndex,EndingIndex+1) if want to get the part from startIndex to endIndex
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

// Sorting of array
myChildren.sort();  // sorting with respect to alphabetic order
console.log(myChildren);

const twoDarr = [[1,2,3],[1,2,3],1];
// want the data in 1d
console.log(twoDarr.flat(1)); // return the new array in 1d format param: depth 

// to check is the variable is an array
console.log(Array.isArray(fruits)); // output: true
console.log(Array.isArray("Raju")); // output: false

// to covert into the array
console.log(Array.from("Raju")); // output : ["R","a","j","u"]

// cannot covert the objects 
console.log(Array.from({name:'raju'})); // it will give empty array
// but we can get the array of value or key of object using object methods
console.log(Object.keys({name:'raju',age:20}));
console.log(Object.values({name:'raju',age:20}));