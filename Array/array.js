/* 
   -> Array in the javascript are objects.
   -> Indexing is done in the form of key and value pair.
   -> Keys are by default numbers starting from 0
*/

// declaration of an array
let a = ["car","bus","cycle"];
console.log(a);

// declaration using Array constructor method
// let a1 = new Array("car","bus","train");  
// or
let a1 = new Array();
a1[0] = 5;
a1[1] = 6;
console.log(a1);

a[0] = "train";  //can change the value using indexes
console.log(a);

a[0] = 1;  //can store multiple data type
console.log(a);

a[5] = "plane";  // storing elements on high index can genrate undefined holes inside the array
console.log(a);  // output : [ 1, 'bus', 'cycle', <2 empty items>, 'plane' ]
console.log(a[3], " ", a[4]);  // output : undefined undefined
