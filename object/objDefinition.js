// 1.definition using new keyword 
const person = new Object();
person.name = "Ram";
person.age = 40;
console.log(person);

// const person  = Object();  it will not a correct way to create an instance , it may run on specfic enviroment

// 2.definition of object using Object literal
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2015,
    price: 500000
}
car.colour = "red";  // we can also add properties after the creation of object
console.log(car);

// 3. Definition using constructor
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eat = function(){
        console.log("Eating");
    }
}

// Creating objects using the constructor
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
person1.gender = "male";  // this statement add properties in person1 object not in Person constructor
console.log(person1.eat());
console.log(person2);

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