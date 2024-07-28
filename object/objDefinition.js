/* definition using new keyword and 
   creating instance of Object class using its constructor */
const person = new Object();
person.name = "Ram";
person.age = 40;
console.log(person);

// const person  = Object();  it will not a correct way to create an instance , it may run on specfic enviroment

// definition of object using Object literal
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2015,
    price: 500000
}
console.log(car);

// object contains both the properties and methods
const bus = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2015,
    price: 500000,
    start: () =>{
        console.log("Bus started");
    },
    stop: () =>{
        console.log("Bus stopped");
    }
}
console.log(bus.start);  // it will only return the function not execute it
// for execution use () parantesis
bus.start();  // it will execute the function and print "Bus started" in console