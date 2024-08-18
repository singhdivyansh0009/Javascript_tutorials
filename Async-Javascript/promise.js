/* 
  Due to the challanges of callback the new concept is discovered called promises.
  Promise is an object that links the produce code and consume code.
  Produce code are code that can take some to executed completely
  consume code are code that must wait for some results.
*/

// From ES6 we can create an instance of promise
// Promise constructor method takes a callback as parameter that taked two arguments
// resolve that linked with then() and reject that linked with catch
const promise1 = new Promise((resolve,reject)=>{
    // some async task link netwok request,etc are performed
    setTimeout(()=>{
        let err = false; 
        console.log("Task is completed");
        if(!err)
          resolve(); // if no error then resolve the promise
        else
          reject();  // if error then reject the promise
        
    },1000);
});
// then method is executed when promise resolved
promise1.then(()=>{
    console.log("Sucess");
}).catch(()=>{  // catch method is executed when promise reject
  console.error('Error: 404');
})

// We can also pass value to resolve and reject
const promise2 = new Promise((resolve,reject)=>{
  // some async task link netwok request,etc are performed
  setTimeout(()=>{
      let err = true; 
      console.log("Task is completed");
      if(!err)
        resolve({username:'Ramesh',age:20}); 
      else
        reject("404 NOT FOUND");  
      
  },1000);
});

promise2.then((response)=>{
  console.log("Sucess! :", response);
}).catch((err)=>{
console.error(err);
})

// we can also do chaining of then 
const promise3 = new Promise((resolve,reject)=>{
  // some async task link netwok request,etc are performed
  setTimeout(()=>{
      let err = false; 
      console.log("Task is completed");
      if(!err)
        resolve({username:'Ramesh',age:20}); 
      else
        reject("404 NOT FOUND");  
      
  },1000);
});

promise3.then((response)=>{
  console.log("Sucess! :", response);
  return response.username;  // returned value is consumed by next then()
}).then( (username)=>{
  console.log("Sucess! :", username);
}
).catch((err)=>{
console.error(err);
})

// ------------------------------------------------------------------------------------------------ //

// we can also handle the promises using async and await
// Note : -> async function does'nt handle the error automatically we have to use try and catch 
async function getUser(){
    try{
        const response = await promise3; // wait for promise3 to be resolve or reject 
        console.log("Sucess async wala! :", response);      
    }catch(err){
        console.log(err);
    }
}

getUser();