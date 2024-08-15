/*
  -> filter is the array method that used to return an array that passes some tests.
  -> filter does not affects the original array it returns new array
  -> parameters of callback : (value,index(optional),array(optional)(for which the filter is called))
*/
const nums = [1,2,3,4,5];
const filteredNum = nums.filter((values) => values%2===0 );
console.log(filteredNum);

/* Can we filter the value without filter method ?
  -> yes, using forEach / for / for...of / for...in ,etc 
     but then we have to write more code than filter method
*/

const evenNum = [];
nums.forEach((value)=>{
    if (value%2===0) 
        evenNum.push(value);
});
console.log(evenNum);

/* Example of filtering data from json file */
const data = require('./data.json');  // we have to import in node enviroment
const filteredData = data.filter((items)=>{
     return items.age < 30 && items.address.city === 'Los Angeles';
});
console.log(filteredData);