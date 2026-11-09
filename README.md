# Dev Stack – Build Your Ideal Development Stack

## About the Project
Dev Stack is a responsive web application built with React. It allows users to explore different technologies and create their ideal development stack.

## Technologies Used
- React.js
- JavaScript
- Tailwind CSS
- React Icons
- React Toastify
- JSON

## Features
1. Explore different technologies with descriptions and ratings.
2. Build your own stack by selecting one technology from each category.
3. Responsive design for desktop and mobile devices.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that looks like HTML inside JavaScript. It helps us write and display UI elements easily in React.

### 2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is used to store and update data in a component. I used it in the Technology component to manage the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to handle side effects in React, such as fetching data. I imported the JSON data directly, so I did not need `useEffect` to load it.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify each item and update the list correctly when something changes.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying something based on a condition. I used it to show "No technologies selected yet" when the stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send information back by calling a function passed from the parent as a prop.

## Author
Saifa
