/* Arthemetic operators in javascript */
let a = 20;
let b = 3;
    console.log("a + b = ",a+b);
    console.log("a - b = ",a-b);
    console.log("a / b = ",a/b); // it give actual value in decimal
    console.log("a * b = ",a*b);
    console.log("a ** b = ",a**b);  // this is an exponential operator means(a^b)
    console.log("a % b = ",a%b);

let c = a++;  // post increment 
    console.log("a after a++ = ", a);
    console.log("value of c : ", c);

c = ++b;  // pre increment 
    console.log("b after ++b = ", b);
    console.log("value of c : ", c);

c = a--; // post decrement 
    console.log("a after a-- = ", a);
    console.log("value of c : ", c);

c = --b; // pre decrement
    console.log("b after --b = ", b);
    console.log("value of c : ", c);