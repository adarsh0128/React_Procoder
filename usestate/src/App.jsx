import Count from "./components/Count";
const App = () => {
  return (
    <div>
      <Count />
    </div>
  );
};

export default App;

// So, useState is a React hook that lets us add state to functional components. In simple terms, it's like a variable that remembers its value even after the component re-renders. For example, if I want to keep track of a counter value, I’ll use useState to store that number.

// We write something like: const [count, setCount] = useState(0); — here, count is the current value, and setCount is the function to update it. The initial value is 0.

// Whenever I call setCount, React re-renders the component with the new value of count. This is useful for things like handling button clicks, form inputs, toggles, and so on.

// It helps make the UI interactive and reactive to user actions — and the best part is, it’s super simple to use inside functional components without needing class components anymore.”
