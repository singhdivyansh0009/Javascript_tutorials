// definition of nested object
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
console.log(person.Name);
// diffrent ways of acessing values of nested object
console.log(person.mycar.brand);
console.log(person.mycar['brand']);
console.log(person['mycar']['brand']);