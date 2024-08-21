/* Fetch is a JavaScript API used to make network requests to servers,
   primarily for fetching data from RESTful APIs. It's a more modern and 
   flexible alternative to the traditional XMLHttpRequest object.*/

fetch("https://api.apis.guru/v2/list.json")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

/* 
  How fetch works ?
  -> whenever the fetch is called like other asyncronous operation call request is sent to web api.
  -> But the fetch call are stored in high priority queue (not is callback or task queue).
  -> When the network is available the request is sent to the server.
  -> fetch execution has two part :
   1. Handling the network requests which have to reject or resolve
   2. creating the 3 variable like data , onfullfilled (holds function), onRejection (holds function)
      -> the iterupted request is sent to onRejection and resolved request is sent to onFullFill (including error 
         like 404 not found)
      -> after that the data variable is filled by these function and sent as response.
*/
