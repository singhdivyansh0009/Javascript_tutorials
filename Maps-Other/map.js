/*
    -> Maps in js are objects that stored the unique key.
    -> Maps are not iterable by for in loops
    -> the key can be of any type but in object it should be string or symbol
*/
const map = new Map();
map.set('name', 'Ram');
map.set('age', 5);
map.set('name','Ram'); // it override the value of previous 'name' key
console.log(map); // output : { 'name' => 'Ram', 'age' => 5 }
// map.set(name,'Ram'); // the key cannot be a variable
map.set(1,'Ram');
// iteration of map
for (const [key, value] of map) {
    console.log(key,":", value);
}
console.log(map.size); // return the size of map or no. of pairs in map
console.log(map.has('name')); // return true/false if key is present
console.log(map.get('name')); // return the value of key
