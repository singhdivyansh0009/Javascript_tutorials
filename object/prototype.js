function person (name,age) {
    this.name = name;
    this.age = age;
}
console.log(typeof person); //it return function
let p1 = new person("ram",10); // creating an instance using constructor function
console.log(typeof p1); //it return object

// if I want to add new property in p1 I can do it easily
p1.gender = "male";
console.log(p1); // output : person { name: 'ram', age: 10, gender: 'male' }

//but it cannot made changes in person function 
console.log(new person("raju",20));

person.gender = "Male";
console.log(person.gender); //output: Male
console.log(person); //output: [Function: person] { gender: 'Male' }
let p3 = new person("ram",90);
console.log(p3.gender); //output: undefined -- we cannot be able to acess the property of person which is not default
console.log(p3); //output: person { name: 'raju', age: 10 }

person.prototype.gender="male";  //adding gender in the prototype object
let p2 = new person("ram",90);
console.log(p2.gender);  // output: male -- now it inherit the properties of prototype object of person