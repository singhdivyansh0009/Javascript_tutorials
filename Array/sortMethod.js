const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 }
];

people.sort((a, b) => a.age - b.age);  // if return value of call back is -ve first value is put before second

console.log(people);
