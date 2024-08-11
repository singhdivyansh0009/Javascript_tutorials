// forEach() is an array method 
const arr = [1,2,3,4];
arr.forEach((values)=>{
    console.log(values);
})
// callback inside the forEach  parameters (value,index,array)
arr.forEach((values,index,arr)=>{
     arr[index] = values*10;
})
console.log(arr); //output : [10,20,30,40]

// forEach() with map
const map = new Map();
map.set(1, 1);
map.set(2,1);
map.set(3,1);

map.forEach((value,key)=>{
    console.log(key,value); 
})

map.forEach((value,key,map)=>{
    map.set(key,value+1);
})

map.forEach((value)=>{
    console.log(value);
})