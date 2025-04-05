/*
Event propagation in JavaScript refers to the order in which events are handled in the DOM when an event is triggered on a nested element.
It describes how the event travels through the DOM tree.
*/

/* what is event bubbling?
- events are fired from bottom to top
- By default event bubbling happens in events
*/

const div = document.querySelector("div");

const form = document.querySelector("form");

const button = document.querySelector("button");

// div.addEventListener("click", function () {
//   alert("div");
// });

// form.addEventListener("click", function () {
//   alert("form");
// });

// button.addEventListener("click", function () {
//   alert("button");
// });

/* what is diff b/w event.target  vs event.currentTarget?
1) event.target
- Refers to the actual DOM element that triggered the event (the origin of the event).
- Doesn’t change even when the event bubbles up.

2) event.currentTarget
- Refers to the element the event listener is attached to.
- It tells you where you're listening for the event.

3).this (inside the handler)
- In a regular function, this refers to the same as event.currentTarget.
-In an arrow function, this is lexically scoped (i.e., it refers to where the function was defined, not the element).
*/

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget =" +
//       event.currentTarget.tagName +
//       ", target=" +
//       event.target.tagName +
//       ", this=" +
//       this.tagName
//   );
// }

/* what is event capturing
The event starts from the window and trickles down to the target element. (Top to bottom)
-*/

// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   { capture: true }
// );

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   { capture: true }
// );

// button.addEventListener(
//   "click",
//   function () {
//     alert("button");
//   },
//   { capture: true }
// );

/* How to stop bubbling & capturing
we can do it with help of stop propogation
-*/

// div.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("div");
// });

// form.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("button");
// });

/* what is event delagtion
- Event delegation is a technique in JavaScript that allows you to attach event listeners to a parent element and handle events for its child elements. 
This can be useful for creating more flexible and reusable code. */

// document.querySelector(".products").addEventListener("click", (e) => {
//   if (e.target.tagName === "SPAN") {
//     window.location.href += "/" + e.target.outerText;
//   }
// });
