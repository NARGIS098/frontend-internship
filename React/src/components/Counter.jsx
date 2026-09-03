import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <section className="counter">
      <h2>My Counter</h2>

      <h3>{count}</h3>

      <button onClick={decrease}>-</button>

      <button onClick={increase}>+</button>
    </section>
  );
}

export default Counter;