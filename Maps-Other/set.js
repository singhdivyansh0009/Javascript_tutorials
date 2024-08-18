/*
   -> set stores the unique values
   -> set in js is the collection of unique values.
   -> values can be of any type primitive or object
*/
const set = new Set();
set.add(1);
set.add('Ram');
set.add({name:'Raju'});

set.forEach((value)=>{
    console.log(value);
})
