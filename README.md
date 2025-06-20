## useState

// So, useState is a React hook that lets us add state to functional components. In simple terms, it's like a variable that remembers its value even after the component re-renders. For example, if I want to keep track of a counter value, I’ll use useState to store that number.

// We write something like: const [count, setCount] = useState(0); — here, count is the current value, and setCount is the function to update it. The initial value is 0.

// Whenever I call setCount, React re-renders the component with the new value of count. This is useful for things like handling button clicks, form inputs, toggles, and so on.

// It helps make the UI interactive and reactive to user actions — and the best part is, it’s super simple to use inside functional components without needing class components anymore.”

## State and Porps

“So, in React, both state and props are used to manage data, but they serve different purposes.

Props are like parameters passed to a component — they come from the parent and are read-only. That means the component receiving the props can use them, but can't change them directly. For example, if I pass a user's name as a prop, the child component can display it but can’t modify it.

On the other hand, state is internal to the component. It's used to manage data that can change over time — like a counter, form input, or toggle. Unlike props, the component can change its own state using something like useState.

So in short: props are passed to the component and are fixed from the parent, while state is managed within the component and can change based on user interaction.”

## React Fragment

“So, a React Fragment is a way to group multiple elements together without adding extra nodes to the DOM. Normally, in React, if we want to return multiple elements, we have to wrap them in a parent element like a <div>. But sometimes that extra div isn’t needed and can mess up our layout or styling.

That’s where fragments come in. Instead of wrapping with a <div>, we can just use <React.Fragment> or even the shorthand <>...</>. It groups elements together in our component, but nothing extra is added in the actual HTML.

So, in short, fragments help keep our JSX clean and avoid unnecessary DOM elements.”
