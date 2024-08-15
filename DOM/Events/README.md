## 1. What are JavaScript events?
Answer: JavaScript events are actions or occurrences that can be detected by JavaScript. Examples include user actions such as clicking a button, hovering over an element, or pressing a key, as well as browser events like page loading or resizing.
## 2. What is event delegation in JavaScript?
Answer: Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child element. When an event occurs on one of the child elements, it bubbles up to the parent, where the event listener can handle it. This is efficient and reduces the number of event listeners.
## 3. What is the difference between event.preventDefault() and event.stopPropagation()?
Answer: event.preventDefault() is used to prevent the default action associated with an event (e.g., preventing a form from submitting). event.stopPropagation() stops the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
## 4. How does event bubbling work in JavaScript?
Answer: Event bubbling is a mechanism where an event starts from the target element and bubbles up through the ancestors (parent elements) in the DOM. For example, if a click event occurs on a child element, it first triggers the child’s event handler and then moves up to the parent elements.
## 5. What is event capturing (or trickling) in JavaScript?
Answer: Event capturing, also known as trickling, is the opposite of event bubbling. In event capturing, the event starts from the outermost element and travels down to the target element. You can use capturing by setting the third argument of addEventListener to true.
## 6. What are the phases of event propagation?
Answer: Event propagation has three phases:
Capturing phase: The event moves from the window down to the target element.
Target phase: The event reaches the target element.
Bubbling phase: The event bubbles up from the target element to the window.
## 7. What is the addEventListener method in JavaScript?
Answer: The addEventListener method is used to attach an event handler to an element. It allows you to specify the type of event, the function to execute when the event occurs, and an optional third argument to specify whether the event should be captured or bubbled.
## 8. How can you remove an event listener in JavaScript?
Answer: You can remove an event listener using the removeEventListener method. This method requires the same arguments used in addEventListener, including the event type, the event handler function, and the optional capture flag.
## 9. What are custom events in JavaScript, and how do you create and dispatch them?
Answer: Custom events allow you to create and trigger your own events. You can create a custom event using the CustomEvent constructor and dispatch it using the dispatchEvent method.
### Example :
const myEvent = new CustomEvent('myCustomEvent', { detail: { key: 'value' } });
element.dispatchEvent(myEvent);
## 10. What is the purpose of the event.target and event.currentTarget properties?
Answer: event.target refers to the element that triggered the event (i.e., the innermost element clicked). event.currentTarget refers to the element to which the event listener is attached. They can be different in event delegation scenarios.
