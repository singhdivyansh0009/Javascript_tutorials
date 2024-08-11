// for..of loop iterate through the value of iterable objects
// for...of loop on arr
const arr =  [1,2,3,4];
for (const value of arr) {
    console.log(value);
}

//for...of loop on string
for(const char of "hello"){
    console.log(char);
}

// for...of on map
const map = new Map();
map.set('name','Ram');
map.set('age',25);
for (const [key, value] of map) {
    console.log(key,':',value);
}

// Note : we cannot access object value using for...of
const obj = {
    name : "Ram",
    age : 20
}
for(const items of obj){  // it will give error
    console.log(items);
}