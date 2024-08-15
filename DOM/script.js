/*
   -> document is an object having some properties and methods 
      which helps in the manipulation of the HTML elements
*/

// => Methods of the document object to get the elements of html
const title = document.getElementById('title1'); // it will return the element (object) having id attribute title
console.log(title);  // o/p : <h1 id="title">DOM</h1>

/*
   -> it will return all the elements with h1 tag in the form of html collection
   -> html collection is a collection of HTML elements and also having indexing like array
*/
const headings = document.getElementsByTagName('h1'); 
console.log(headings); 

// it will also return html collection of elements having class name container
const container = document.getElementsByClassName('container');
console.log(container);

// it will return first element having tag h1
const heading = document.querySelector('h1');  // getting the elements using css selector
console.log(heading);

const headings1 = document.querySelectorAll('h1');  // it will return all like getElementsByTagName method
                                                    // but in the form of node list
console.log(headings1);

/* 
    Differences Between NodeList and HTMLCollection:
    -> Content: NodeList can contain any type of node (elements, text nodes, comments), 
                while HTMLCollection only contains element nodes.
    -> Static vs. Live: HTMLCollection is always live, whereas NodeList can be either live or static 
                depending on how it's obtained.
    -> Methods and Iteration: NodeList is more versatile in iteration because 
                you can use forEach directly on it in modern browsers
*/

/* => getAttribute() and setAttribute() and removeAttribute() methods
   are used to get or set or remove the attributes of an element  */
title.setAttribute('class','title');
console.log(title.getAttribute('class'));  // o/p : title
title.setAttribute('class','titleChanged');
console.log(title.getAttribute('class'));  // o/p : titleChanged because setAttribute method override the previous value
// to add new value with previous value of attribute we can do 
title.setAttribute('class',title.getAttribute('class')+' titleChanged');
console.log(title.getAttribute('class'));
title.removeAttribute('class'); // remove an attribute of element

/*  => Methods for add and remove elements */
// creating a new element
const newElement = document.createElement('img');
newElement.src = 'https://www.w3schools.com/howto/img_avatar.png';

// adding the new element to the container
container[0].appendChild(newElement);
// heading.appendChild(newElement); //When you append an element that already exists in the DOM to a new parent,
                                    //it gets moved from its original location to the new location.
// to add the newElement in both heading and container
const clonedElement = newElement.cloneNode(true); // make a clone of newElement
heading.appendChild(clonedElement);

/* -------------------------------------------------------------------------------------------------------------- */

// Properties of document object 

console.log(document.title);  // it will return the title of the webpage

// innerHTML property is used to get and replace the content of the element
const para = document.getElementById('para1');
console.log(para.innerHTML); 
para.innerHTML = 'The content is changed';  // it will replace the content of para1 elemet
console.log(para.innerHTML);

// we can change or add(if not present) attributes(className,id,style,etc)
para.className = 'paragraph';  // change the class name
console.log(para.getAttribute('class'));
para.style.backgroundColor ='Red'; // style property used to apply or change the style 
console.log(para.style.backgroundColor); // it will return the value of backgroundColor property of para element