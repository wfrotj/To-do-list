# React State and Lifecycle Methods

## Lesson Objectives:

1. Define what is React state
2. Define React Virtual DOM
3. What are the different lifecycle methods of React?
4. Use state and a lifecycle method

## React state

- state is used to manage the data
- changes in a component over time
- State allows us to update a component's UI in response to user input, server responses, and other dynamic events

## Functional Components

- Functional components are a way to define a React component using a JavaScript function.

`function MyComponent() {
  return <h1>Hello, World!</h1>;
}`

## State

- State is an object that represents the internal state of a component.
- State is used to manage data that changes in a component over time.
- To use state in a functional component, we use the useState hook.

## VDOM

- The Virtual DOM is a concept in React that allows the framework to optimize the process of updating the user interface.
- traditional webdev => user interacts with data => programmer updates DOM
- in react => programmer updates state => react updates the dom
- React's Virtual DOM is a lightweight representation of the actual DOM. When the state of a component changes, React updates the Virtual DOM, which is much faster and more efficient than updating the actual DOM. React then compares the previous Virtual DOM to the updated Virtual DOM, and determines which changes need to be made to the actual DOM. By minimizing the number of updates to the actual DOM, React can provide a faster and smoother user experience
