const createcounter = (n) =>{
    let temp = n;
    /* creating object  which contains functions as value */
    const Obj = {   
        increment : () => ++temp,
        decrement : () => --temp,
        reset : () => temp = n
    }
    return Obj;   // returning object whose values are functions
}
const counter = createcounter(5);
let x = [];
    /* calling the functions using object key */
    x[0] = counter.increment();  
    x[2] = counter.reset();
    x[1] = counter.decrement();
    
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);