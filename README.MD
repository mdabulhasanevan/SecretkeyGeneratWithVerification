#Q1.What is ES6 and what are the new features introduced in ES6?
Ans: 
ES6, also known as ECMAScript 2015, is the 6th edition of the ECMAScript language specification and a major update to JavaScript. It introduced many new features and improvements, making JavaScript more powerful and easier to work with.
Certainly! Here's a summary of ES6 features without examples:

1. **Arrow Functions**: Provides a concise syntax for writing functions and lexically binds `this`.

2. **Let and Const**: Introduces block-scoped variable declarations, with `const` creating immutable bindings.

3. **Template Literals**: Allows embedding expressions within strings using backticks and `${}` for interpolation.

4. **Default Parameters**: Enables functions to have default values for parameters if none are provided.

5. **Destructuring Assignment**: Simplifies the extraction of values from arrays and objects into distinct variables.

6. **Rest and Spread Operators**: Rest operator gathers remaining elements into an array; spread operator expands elements from an array or object.

7. **Classes**: Introduces a formal syntax for object-oriented programming, providing constructors and methods.

8. **Modules**: Standardizes the way to organize and share code across files using `import` and `export` statements.

9. **Promises**: Provides a more robust way to handle asynchronous operations, improving code readability and error handling.

10. **Enhanced Object Literals**: Simplifies the syntax for defining object properties and methods.

11. **For-of Loop**: Offers a new way to iterate over iterable objects like arrays, strings, and collections.

12. **Symbol**: Introduces a new primitive type that creates unique identifiers, avoiding name clashes.

13. **Map, Set, WeakMap, WeakSet**: Adds new collection data structures with more powerful features than traditional objects and arrays.

14. **Block-Scoped Functions**: Ensures that functions declared within a block are scoped to that block.

15. **Iterators and Generators**: Provides a new mechanism for iterating over data and allows functions to yield multiple values over time.


#Q2. What is Event Bubble and Event Delegation in JS?
Ans:
**Event Bubbling** and **Event Delegation** are important concepts in JavaScript related to how events are handled in the DOM (Document Object Model).

### Event Bubbling

**Event Bubbling** is a phase of event propagation in the DOM. When an event occurs on an element, it first triggers on that element, then moves up through the ancestor elements in the hierarchy, triggering the same event on each ancestor until it reaches the root element (usually the `document`).

- For example, if you click on a button inside a `div`, the click event will first trigger on the button, then on the parent `div`, and continue up the DOM tree.

**Phases of Event Propagation**:
1. **Capturing Phase**: The event starts from the root and moves down to the target element (not commonly used).
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase**: The event bubbles up from the target element to the root.

### Event Delegation

**Event Delegation** is a technique that leverages event bubbling to handle events efficiently. Instead of attaching event listeners to multiple child elements, you attach a single event listener to a parent element. The parent element can then listen for events that bubble up from its children.

- This approach is particularly useful when dealing with dynamically generated elements, as you don't need to attach event listeners to elements that don't exist yet. The event listener on the parent will automatically handle events from future child elements as well.

**Advantages of Event Delegation**:
- **Improved Performance**: Reduces the number of event listeners attached to the DOM, saving memory and processing time.
- **Dynamic Handling**: Simplifies event handling for elements that are dynamically added to the DOM.

In summary:
- **Event Bubbling** is the process where an event triggers on the target element and then bubbles up to its ancestors.
- **Event Delegation** uses event bubbling to manage events more efficiently by attaching a single event listener to a common parent element, rather than multiple listeners to individual child elements.


#Q3. What is the difference between localstorage , session storage and cookies.
Ans:
**LocalStorage**, **SessionStorage**, and **Cookies** are all mechanisms for storing data in a user's browser, but they differ in terms of scope, expiration, and how they are used.

### 1. LocalStorage
- **Scope**: Data stored in `localStorage` is specific to the domain and remains available across all pages of that domain.
- **Expiration**: Data persists even after the browser is closed or the device is restarted. It remains until explicitly deleted by the user or through code.
- **Capacity**: Typically up to 5-10 MB of storage space, varying slightly between browsers.
- **Accessibility**: Accessible via JavaScript; data is not sent with every HTTP request.
- **Use Cases**: Ideal for storing data that needs to persist across sessions, such as user preferences or long-term state information in a web application.

### 2. SessionStorage
- **Scope**: Similar to `localStorage`, but the data is specific to a single tab or window. It is not shared between different tabs or windows, even if they belong to the same domain.
- **Expiration**: Data is automatically cleared when the tab or window is closed.
- **Capacity**: Typically the same as `localStorage`, around 5-10 MB.
- **Accessibility**: Accessible via JavaScript; data is not sent with every HTTP request.
- **Use Cases**: Suitable for temporary data that only needs to persist for the duration of a single browsing session, such as form data that needs to be retained between pages.

### 3. Cookies
- **Scope**: Data stored in cookies is accessible across different pages of a domain and can be shared between different subdomains if explicitly configured.
- **Expiration**: Cookies have an expiration date set by the `Expires` or `Max-Age` attribute. They can persist across sessions if the expiration date is set in the future, or they can be session-based and expire when the browser is closed.
- **Capacity**: Limited to about 4 KB per cookie, with a limit of around 20-50 cookies per domain (varies by browser).
- **Accessibility**: Cookies can be accessed both via JavaScript and by the server through HTTP headers. They are sent with every HTTP request to the server, which can affect performance.
- **Use Cases**: Commonly used for tracking user sessions, storing authentication tokens, or persisting user settings that need to be sent to the server.


#Q4. In CSS what is the difference between display inline , display inline block and display block?
Ans: 
In CSS, the `display` property controls the layout behavior of an element. The differences between `display: inline`, `display: inline-block`, and `display: block` affect how elements are positioned and how they interact with other elements on the page.

### 1. `display: inline`
- **Layout Behavior**: The element does not start on a new line and only takes up as much width as necessary. 
- **Width and Height**: You cannot explicitly set the width and height of an inline element. The dimensions are determined by the content inside the element.
- **Padding and Margin**: You can apply padding and margin, but vertical margins (top and bottom) do not affect the layout as much. Horizontal margins work as expected, but they don't cause a line break.
- **Examples**: `span`, `a`, `strong`, `em`, and `img` are typically inline elements.

### 2. `display: inline-block`
- **Layout Behavior**: Similar to `inline`, the element does not start on a new line, but unlike `inline`, you can set the width and height.
- **Width and Height**: You can explicitly set both width and height.
- **Padding and Margin**: Both horizontal and vertical padding and margin work as expected.
- **Use Case**: Useful when you want elements to flow inline like text, but still need to control their dimensions and apply full padding/margin. For instance, creating buttons that stack horizontally but have specific dimensions.

### 3. `display: block`
- **Layout Behavior**: The element starts on a new line, taking up the full width available by default, which pushes other elements to the next line.
- **Width and Height**: You can explicitly set both width and height. If no width is specified, the element stretches to fill the container.
- **Padding and Margin**: Both horizontal and vertical padding and margin work as expected. Vertical margins cause a space between block elements.
- **Examples**: `div`, `p`, `h1-h6`, `section`, `header`, and `footer` are block-level elements by default.

#Q5. What are new features in CSS3?
Ans: 
CSS3 introduced a wide range of new features and improvements that have significantly enhanced the ability to create sophisticated and visually appealing web designs. Here are some of the key features introduced in CSS3:

### 1. **Selectors**
- **Attribute Selectors**: Allows for more precise targeting of elements based on their attributes (e.g., `[type="text"]`).
- **Pseudo-classes**: New pseudo-classes like `:nth-child`, `:nth-of-type`, `:not`, and more allow for more complex and specific selections.

### 2. **Box Model**
- **Box-Sizing**: The `box-sizing` property lets you control whether padding and borders are included in an element’s width and height.

### 3. **Backgrounds and Borders**
- **Multiple Backgrounds**: Allows you to apply multiple background images to a single element.
- **Border Radius**: Enables the creation of rounded corners on elements without the need for images.
- **Box Shadow**: Allows you to add shadow effects to elements, creating depth and emphasis.
- **Border Image**: Lets you use an image as a border around an element.

### 4. **Colors**
- **RGBA and HSLA**: Adds support for specifying colors using RGBA (Red, Green, Blue, Alpha) and HSLA (Hue, Saturation, Lightness, Alpha), allowing for colors with transparency.
- **Opacity**: The `opacity` property allows for the creation of transparent elements.

### 5. **Text Effects**
- **Text Shadow**: Allows you to add shadow to text, creating effects like glow, outline, and more.
- **Word Wrap**: The `word-wrap` property helps manage how text breaks within an element.
- **Text Overflow**: Handles overflow text, with options like `ellipsis` to indicate clipped content.

### 6. **Fonts**
- **@font-face**: Enables the use of custom fonts that are not installed on the user's device, allowing for greater typographic flexibility.

### 7. **Transformations**
- **2D Transforms**: The `transform` property allows you to rotate, scale, skew, and translate elements in 2D space.
- **3D Transforms**: Extends the `transform` property to 3D space, enabling more complex animations and effects.

### 8. **Transitions**
- **Transitions**: Allows for smooth transitions between states when properties change, like `width`, `color`, `opacity`, etc., without needing JavaScript.

### 9. **Animations**
- **Keyframe Animations**: The `@keyframes` rule allows you to create complex animations by defining keyframes and properties at different stages of the animation.

### 10. **Flexbox**
- **Flexbox Layout**: Provides a new layout model for creating responsive and flexible layouts that are easy to manage, aligning items and distributing space dynamically.

### 11. **Grid Layout**
- **CSS Grid Layout**: Introduces a powerful 2D grid-based layout system that allows for the creation of complex web layouts with precise control over rows and columns.

### 12. **Media Queries**
- **Responsive Design**: Media queries allow you to apply different styles based on the characteristics of the device, such as screen size, orientation, and resolution.

### 13. **Multiple Columns**
- **Multi-Column Layout**: Enables text to be split into multiple columns, similar to newspaper layouts, with properties like `column-count` and `column-gap`.

### 14. **User Interface**
- **Resize**: The `resize` property allows elements to be resizable by the user.
- **Box-Sizing**: Controls how the total width and height of elements are calculated.

### 15. **CSS Variables (Custom Properties)**
- **Custom Properties**: Introduces variables in CSS (`--var-name`) that can be reused throughout the stylesheet, making it easier to manage values that are used in multiple places.

### 16. **Clipping and Masking**
- **Clip-path**: Allows you to define a shape or a path to clip the element, making parts of the element visible or hidden.
- **Masking**: The `mask` property lets you use an image as a mask over an element, controlling the visibility of parts of the element.

### 17. **Filters**
- **CSS Filters**: Provides effects like blur, grayscale, brightness, contrast, and more directly on elements.

### 18. **Calc() Function**
- **Calc()**: Allows for dynamic calculations to set CSS property values, such as widths and margins, combining units (e.g., `calc(100% - 20px)`).

### 19. **Viewport Units**
- **Viewport-Relative Units**: Introduces `vw`, `vh`, `vmin`, and `vmax` units, which are relative to the viewport dimensions, useful for responsive design.

### 20. **CSS Shapes**
- **CSS Shapes**: Allows text to wrap around custom shapes, rather than just rectangular boxes, using properties like `shape-outside`.

These features have empowered developers to create more dynamic, responsive, and visually appealing web pages with greater ease and precision.