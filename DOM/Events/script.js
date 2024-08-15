// Diffrent way to handle events
/* 1. Using event attributes in html (like onlick, onchange, etc):
    Ex :
       HTML :      <li><button id="one" onclick = {function_name}>one</button></li>
       JavaScript : function function_name(){
                         console.log('Button clicked');
                    }
*/

/*
// 2. Using addEventListener() method
// Ex :
document.getElementById('one').addEventListener('click',function(){
    console.log('Button one clicked');
});

// Parameters(type of event, function to handle event, event propogation (true/false)(default : false))
// Example1 : For false - Bubbles up through ancestors from targeted element (event bubbling)
document.querySelector('.buttons').addEventListener('click',function(){
        console.log('ul is clicked')
},false); // clicked second
document.getElementById('one').addEventListener('click',function(){
    console.log('Button one clicked');
},false);  // clicked first 

// Example2 : For true - Event start from window to targeted element (event capturing / trickling)
document.querySelector('.buttons').addEventListener('click',function(){
    console.log('ul is clicked')
},true); // clicked  first
document.getElementById('one').addEventListener('click',function(){
console.log('Button one clicked');
},true); // clicked second

*/

// To prevent bubling and capturing
// document.querySelector('.buttons').addEventListener('click',function(){
//     console.log('ul is clicked')
// }); 
// document.getElementById('one').addEventListener('click',function(e){
//     console.log('Button one clicked');
//     e.stopPropagation();  // it will stop the event propogation
// });

// // To prevent default action of event
// document.getElementById('one').addEventListener('click',function(e){
//       e.preventDefault(); // useful when you want to override or prevent the default action that
//                           // the browser or the system performs in response to an event.
//      // You can now handle the event
// })

// // Important event properties and methods
// /* 
// 1. Event.target : The element to which the event was originally sent.
// 2. Event.currentTarget : The currently targeted element in the event capture phase.
//                          element that the mouse pointer left before triggering the event.
// 3. Event.timeStamp : The time at which the event was created (in milliseconds since
//                      the start of the document loading process).
// 4. Event.type : The type of event. */

// document.getElementById('one').addEventListener('click',function(e){
//     console.log(e.target); // it will print the element on which the event is triggered
//     console.log(e.currentTarget); // it will print the element on which the event is handled
//     console.log(e.timeStamp); // it will print the time at which the event is triggered
//     console.log(e.type); // it will print the type of event
// });

// Exercise1 : Want a dot where the pointer clicked in ul
const ul = document.querySelector('.buttons');
ul.addEventListener('click',myfunction);
function myfunction(e){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    ul.appendChild(dot);
    dot.style.left = e.x+'px';
    dot.style.top = e.y+'px';
}

