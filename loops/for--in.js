// for...in loop iterator gives the key of the iterable object
// for...in loop on arr
const arr =  [1,2,3,4];
for (const key in arr) {
    console.log(arr[key]);
}

//for...in loop on string
const str = "hello";
for(const key in str){
    console.log(str[key]);
}

//for...in loop on object
const obj = {
    name : "Ram",
    age : 20
}
for(const key in obj){  
    console.log(obj[key]);
}