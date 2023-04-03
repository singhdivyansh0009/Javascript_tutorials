/* Q1. create a const object and can you change it to hold a number */
const items ={
   Name : "Divyansh",
   branch : "cse",
   sem : 4
}
console.log(items);
// items = 23;  we cannot change it because it is const type 

/* Q2. Add a new key in above object if possible */
items['isStudent'] = true; // yes, we can change the key and value of const object
items['Name'] = "Raju";
console.log(items);
