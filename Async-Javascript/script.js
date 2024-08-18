/* 
  => SetTimeout : 
  -> Delay the Execution: setTimeout delays the execution of a function by the specified amount of time. 
     The function is not executed immediately; instead, it's scheduled to be executed later.
  -> Asynchronous Operation: setTimeout is an asynchronous function. It doesn't block the execution 
     of subsequent code. Instead, it schedules the provided function to be executed after the delay, 
     while the rest of the code continues to run.
   -> Callback: The function passed to setTimeout is called a "callback" function.
      It is executed after the specified delay.
*/
// Example 1: Delaying the execution of a function by 2 seconds
const text = document.querySelector('.text');
// const ref = setTimeout(()=>{
//      text.innerHTML = 'Time out called';
// },2000);
// console.log("Called");
// // we can also stop the timeout in before the execution of its callback using clearTimeout.
// const stop = document.querySelector('.stop');
// stop.addEventListener('click', () => {
//     clearTimeout(ref); // we have to pass the refrence of the setTimeout which we want to stop
//     console.log('stopped');
// })

// setInterval : repeat the execution of function after some delay
// Example 2: Repeating the execution of a function every 2 seconds
let i = 0;
const intervalDuration = 1000;
const color = ['green', 'yellow', 'black', 'pink'];
const body = document.querySelector('body');

const interval = setInterval(() => {
    if (i < color.length) {
        body.style.backgroundColor = color[i++]; 
    } else {
        clearInterval(interval); // Stop the interval when done
    }
}, intervalDuration);

