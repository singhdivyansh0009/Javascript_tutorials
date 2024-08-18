// /* Callback is a function passed as an argument to another function */
// function greet(name,callBack){
//     name = name.toUpperCase();
//     callBack(name);
// }
// greet("ramesh",reward);
// function reward(name){
//     console.log("Hello "+name+" you are rewarded");
// }

// // callbacks are mostly used with async function 
// // callbacks are used to handle the result of an asynchronous operation
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "John", age: 30 };
//         callback(null, data);
//     }, 2000);
// }

// fetchData((error, result) => {
//     if (error) {
//         console.error("Error fetching data:", error);
//     } else {
//         console.log("Data fetched:", result);
//     }
// });


/*
Asynchronous programming in JavaScript allows the execution of long-running tasks, 
such as fetching data from a server or reading a file, without blocking the main thread,
ensuring that the rest of the program continues to run smoothly. However, dealing with asynchronous code, 
especially when using callbacks, can become challenging, leading to issues like "callback hell" and
making the code harder to write, understand, and debug.

=> The Challenge with Callbacks
   -> Callback Hell: When multiple asynchronous operations are chained together using callbacks,
    the code structure can become deeply nested and difficult to read. This is known as "callback hell," 
    where each callback leads to another, creating a pyramid-shaped code structure.

   -> Difficult to Debug: If an error occurs, it's harder to track where it originated 
      because the control flow jumps between various callback functions.
*/

function doSomething(callback) {
    // Simulate an asynchronous operation with a delay
    setTimeout(() => {
        const result = "Step 1 complete";
        console.log(result);
        callback(result);
    }, 1000); // 1-second delay
}

function doSomethingElse(result, callback) {
    // Simulate an asynchronous operation with a delay
    setTimeout(() => {
        const newResult = result + " -> Step 2 complete";
        console.log(newResult);
        callback(newResult);
    }, 1000); // 1-second delay
}

function doAnotherThing(newResult, callback) {
    // Simulate an asynchronous operation with a delay
    setTimeout(() => {
        const finalResult = newResult + " -> Step 3 complete";
        console.log(finalResult);
        callback(finalResult);
    }, 1000); // 1-second delay
}

// Running the code
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doAnotherThing(newResult, function(finalResult) {
            console.log("Final result:", finalResult);
        });
    });
});
