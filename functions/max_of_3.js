const max = (a,b,c) => {
  if(a>b)
  {
    if(a>c)
      return a;
    else
      return c;
  }
  else
  {
    if(b>c)
      return b;
    else
      return c;
  }
}
let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");
console.log("max of a,b,c :",max(a,b,c));
