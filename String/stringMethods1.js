/* String has some built in methods in js 
   which are used to do some operations on string
   Note : these method does not makes any changes to the orignal string
          rather than creates or returns new string
*/
let s = "Hello World";
console.log(s.length); // returns the length of the string
console.log(s.toUpperCase()); // returns the string in upper case
console.log(s.toLowerCase()); // returns the string in lower case
/* 
   Q. String is primitive type not an object then how can we are using
      methods and properties using . operator ?
   Ans: - Because javascript has concept called boxing in which the js automatically
          converts the string into string object and used the methods.
        - After the using the methods the string object get destroyed
*/

/* methods for extracting string part */
let s1 = "Hello World";
console.log(s1.substring(0, 5)); // return hello
console.log(s1.slice(0,5)); // return hello
console.log(s1.substr(0,5)); // return hello
/*
  Diffrence between these three methods :
  -> substring does not support negative index as parameter it will give empty string.
  -> substring always swaps negative indices to 0. So, it becomes substring(0, 0)
     params : (StartIndex,EndIndex)
  -> slice same as substring but supports negative index that start from end of the string
     params : (StartIndex,EndIndex)
  -> substring returns string of given length from the start index
     params : (StartIndex,length)
*/
console.log(s1.substring(-1,-5)); // return empty string 
console.log(s1.slice(6,-1)); // return "Worl"

console.log(s1.charAt(2)); //return character at given index
console.log(s1.indexOf('l')) // give index of first appeared given character 
console.log(s1.lastIndexOf('l')) // give last index of character

let s2 = "   Hello   World   ";
console.log(s2.trim()); // remove the extra space from the start and end
console.log(s2.trimStart()); // remove the extra space from the start
console.log(s2.trimEnd());// remove the extra space from the end

let str = "hello   world";
let newStr1 = str.replace("world","India"); // use to replace the a part of string with other string
console.log(newStr1);// Output: "hello India"
let newStr = str.replace(/\s+/g, " "); // Replaces multiple spaces with a single space
console.log(newStr); // Output: "hello world"

console.log(str.includes("world")); // return true because the string in present in str
console.log(str.includes("worlds")); // return false

// if we wants all the words present in the string we can use split method
// params: (seprator) or (seprator,limit)
let str2 = "Hello How are you";
let words = str2.split(" "); // returns an array of string
console.log(words); // output: [ 'Hello', 'How', 'are', 'you' ]
/* split does not support the sepration on multiple seprator
   but we can acheive that using regular expression */

/* String Matching or searching */   
let text = "Please locky locate where 'locate' occurs!";
console.log(text.search("locate")); // return the starting index of string to be searched

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match("ain")); // returns an array with the first match
console.log(text1.match(/ain/g)); // return an array of all matches [ 'ain', 'ain', 'ain' ]

const iterator = text.matchAll("locate"); //Returns an iterator that yields arrays for each match, including capturing groups.
for(let  items of iterator){ // to get each array of the iterators
   console.log(items);
}
