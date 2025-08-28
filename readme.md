
### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- `getElementById("id")`  
  Returns a single element with the specified ID. It's fast and direct, but only works for IDs.

- `getElementsByClassName("class")`  
  Returns a live HTMLCollection of all elements with that class. need to loop through it to access individual items.

- `querySelector("selector")`  
  Returns the first element that matches a CSS selector. I can use IDs, classes, tags, or even complex selectors.

- `querySelectorAll("selector")`  
  Returns a static NodeList of all matching elements. I can use `.forEach()` directly on it.

**Summary**:  
Use `getElementById` for unique elements, `getElementsByClassName` for multiple elements with the same class, and `querySelector`/`querySelectorAll` for flexible CSS-style selection.

---

### 2. How do you create and insert a new element into the DOM?

It can use `document.createElement()` to create an element, then use `appendChild()` or `insertBefore()` to add it to the DOM.

example:

const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);


### 3. What is Event Bubbling and how does it work?

Event bubbling means that when an event (like a click) happens on a child element, it automatically travels up to its parent and ancestors.

example:

div.addEventListener("click", () => console.log("Div clicked"));
button.addEventListener("click", () => console.log("Button clicked"));


### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you attach a single event listener to a parent element and handle events from its children using `event.target`.

This is useful when:

- many similar child elements (like buttons or list items)

- i want to handle events efficiently, especially for dynamic content


example:

document.getElementById("cardContainer").addEventListener("click", (e) => {
  if (e.target.classList.contains("call-btn")) {
    console.log("Call button clicked:", e.target.dataset.number);
  }
});


### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

`preventDefault()`--- Stops the browser’s default behavior. For example, it prevents a form from submitting or a link from navigating.

`stopPropagation()`--- Stops the event from bubbling up to parent elements. It keeps the event contained to the current element