const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2015,
    price: 500000
}
// console.log(car.brand);  // using dot operator
// console.log(car['brand']) // using key name in subscript and must inside ' ' or " "

// acessing value using for in loop  
for(let key in car)
    console.log(car[key] +" ");
/*
// It will give undefined because using dot operator we can acess through key name not a variable
// here key is considered as property of car which is not present in the car object
// Note: key is not declared but used because in for..in loop by default the key is global if not declared using let
for(key in car)
    console.log(car.key +" ");
*/  

//acessing value using Object.values() method
console.log(Object.values(car));  // it will return an array of values of car object

//acessing value using Object.entries()
console.log(Object.entries(car)); // it will return all key value pair in the form of 2d array
let entries = Object.entries(car);
//using for 
for(let i = 0; i < entries.length; i++){
    console.log(entries[i][0] + ":"+ entries[i][1]);
}
//using for...of
for(let [key,value] of entries){
    console.log(key + ":" + value);
}