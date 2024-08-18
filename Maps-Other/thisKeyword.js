/* 
   ->'this' keyword refer to the current context from where it is called.
   -> 'this' keyword has by default global context but it changes according to where it is used
*/
const obj = {
    username : "Divyansh",
    age : 20,
    greet : function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);  // here this keyword has context to this object
    }
}
obj.greet(); // Welcome Divyansh
console.log(this); //it gives empty object in node enviroment and window object in browser

function myFunction(){
    let name = "Ram";
    console.log(this); // outputs: global object (window in browser, global in node)
    console.log(this.name); // it give undefined because this is referring to the global context 
}
myFunction();

const fun = () => (console.log(this));  
fun(); // gives empty object in node and window object in browser