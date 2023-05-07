/*normal function */
function sum(x,y)
{
  return x+y;
}
/* arrow function */
const sum = (x,y) => {
    return x+y;
}

let a = prompt("enter a number");
let b = prompt("enter a number");
a = Number.parseInt(a);
b = Number.parseInt(b);
console.log("sum:",sum(a,b));