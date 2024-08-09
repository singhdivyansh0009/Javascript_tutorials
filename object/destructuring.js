/*
  Destructuring is a powerful feature introduced in ES6
  that allows you to extract values from arrays or properties from objects 
  and assign them to distinct variables in a concise and expressive way.
*/

// destructuring of array 
const a = [1,2,3];

// without destructuring
// let first = a[0];  
// let second = a[1];
// let third = a[2];

// with destructuring
const [first,second,third] = a;
console.log(first," ",second," ",third); // output : 1   2   3

const person = {
    Name: 'Ram',
    age: 25,
    mycar : {
        brand: 'Toyota',
        model: 'Camry',
        year: 2015,
        price: 500000
    }
}

// without destructuring
// const name = person.name;
// const age = person.age;
// const carBrand = person.mycar.brand;

//with destructuring
const {Name,age} = person;  // the variable name should be same as key
console.log(Name," ",age); // o/p : Ram 25

// if want to change the variable name
const {Name:naam,age:umar} = person; 
console.log(naam," ",umar); // o/p : Ram 25

//for nested object
const {mycar : {brand,model}} = person;
console.log(brand," ",model);